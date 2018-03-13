package github.eobrazovanje.controller.entity;

import github.eobrazovanje.converter.*;
import github.eobrazovanje.dto.NastavnikDto;
import github.eobrazovanje.dto.UcenikDto;
import github.eobrazovanje.dto.UserDto;
import github.eobrazovanje.dto.UserPasswordDto;
import github.eobrazovanje.entity.Nastavnik;
import github.eobrazovanje.entity.Ucenik;
import github.eobrazovanje.entity.User;
import github.eobrazovanje.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.validation.Errors;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;

/*
  Created by IntelliJ IDEA.
  User: vladimir_antin
  Date: 2.3.18.
  Time: 19.59
*/
@RestController
@RequestMapping("api/users")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private NastavnikToNastavnikDto toNastavnikDto;

    @Autowired
    private UserDtoToUser toUser;

    @Autowired
    private NastavnikDtoToNastavnik toNastavnik;

    @Autowired
    private UcenikDtoToUcenik toUcenik;

    @Autowired
    private UcenikToUcenikDto toUcenikDto;

    @Autowired
    private UserToUserDto toUserDto;

    @Autowired
    private PredmetToPredmetDto toPredmetDto;

    @Autowired
    private UplataToUplataDto toUplataDto;

    @Autowired
    private DokumentToDokumentDto toDokumentDto;

    @GetMapping
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<java.util.List<UserDto>> getAll(){
        return ResponseEntity.ok(toUserDto.convert(userService.findAll()));
    }

    @GetMapping(value = "/{id}") //username or id
    public ResponseEntity get(@PathVariable String id){
        User user = userService.findByUsernameOrId(id);
        if(user==null){
            return ResponseEntity.notFound().build();
        }
        if(user instanceof Nastavnik){
            return ResponseEntity.ok(toNastavnikDto.convert((Nastavnik) user));
        }else if(user instanceof Ucenik){
            return ResponseEntity.ok(toUcenikDto.convert((Ucenik) user));
        }
        return ResponseEntity.ok(toUserDto.convert(user));
    }

    @GetMapping(value = "/{id}/predmeti")
    public ResponseEntity getPredmeti(@PathVariable String id){
        User user = userService.findByUsernameOrId(id);
        if(user==null){
            return ResponseEntity.notFound().build();
        }
        if(user instanceof Nastavnik){
            return ResponseEntity.ok(toPredmetDto.convert(((Nastavnik) user).getPredmeti()));
        }else if(user instanceof Ucenik) {
            return ResponseEntity.ok(toPredmetDto.convert(((Ucenik) user).getPredmeti()));
        }
        return ResponseEntity.notFound().build();
    }

    @GetMapping(value = "/{id}/authorities")
    public ResponseEntity getAuthority(@PathVariable String id){
        User user = userService.findByUsernameOrId(id);
        if(user==null){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(user.getAuthorities());
    }

    @GetMapping(value = "/{id}/uplate")
    public ResponseEntity getUplataUcenika(@PathVariable String id){
        User user = userService.findByUsernameOrId(id);
        if(user==null){
            return ResponseEntity.notFound().build();
        }
        if(user instanceof Ucenik){
            return ResponseEntity.ok(toUplataDto.convert(((Ucenik) user).getUplate()));
        }
        return new ResponseEntity<>(String.format("Korisnik sa id %s nije ucenik",id),HttpStatus.CONFLICT);
    }

    @GetMapping(value = "/{id}/dokumenti")
    public ResponseEntity getDokumentaUcenika(@PathVariable String id){
        User user = userService.findByUsernameOrId(id);
        if(user==null){
            return ResponseEntity.notFound().build();
        }
        if(user instanceof Ucenik){
            return ResponseEntity.ok(toDokumentDto.convert(((Ucenik) user).getDokumenti()));
        }
        return new ResponseEntity<>(String.format("Korisnik sa id %s nije ucenik",id),HttpStatus.CONFLICT);
    }

    @PostMapping
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity postUser(@RequestBody @Validated UserDto dto, Errors errors){
        if(errors.hasErrors()){
            return ResponseEntity.badRequest().build();
        }
        if(dto.getId()!=0){
            return new ResponseEntity(HttpStatus.CONFLICT); //not send id
        }
        if(userService.findByUsername(dto.getUsername())!=null){
            return new ResponseEntity(HttpStatus.CONFLICT); //username exist
        }
        User user;

        if(dto instanceof NastavnikDto){
            if(((NastavnikDto) dto).getZvanje().getId()==0){
                return new ResponseEntity(HttpStatus.CONFLICT); //zvanje not exist
            }
            user = userService.save(toNastavnik.convert((NastavnikDto) dto));
            if(user==null){
                return new ResponseEntity(HttpStatus.CONFLICT);
            }
            return ResponseEntity.ok(toNastavnikDto.convert((Nastavnik) user));
        }else if(dto instanceof UcenikDto){
            if(((UcenikDto) dto).getBrojIndexa()==null){
                return new ResponseEntity(HttpStatus.CONFLICT); //brojIndexa not exist
            }
            if(userService.findByBrojIndexa(((UcenikDto) dto).getBrojIndexa())!=null){
                return new ResponseEntity<>(String.format("Ucenik sa brojem indexa %s vec postoji, izaberite drugi index",
                        ((UcenikDto) dto).getBrojIndexa()),
                        HttpStatus.CONFLICT); //user nije izmenjen
            }
            user = userService.save(toUcenik.convert((UcenikDto) dto));
            if(user==null){
                return new ResponseEntity(HttpStatus.CONFLICT);
            }
            return ResponseEntity.ok(toUcenikDto.convert((Ucenik) user));
        }
        user = userService.save(toUser.convert(dto));
        if(user==null){
            return new ResponseEntity(HttpStatus.CONFLICT); //user nije sacuvan
        }
        return ResponseEntity.ok(toUserDto.convert(user));
    }

    @PutMapping("/{id}")
    public ResponseEntity put(@PathVariable long id, @RequestBody @Validated UserDto dto, Errors errors, Principal principal){
        if(errors.hasErrors()){
            return ResponseEntity.badRequest().build();
        }
        if(id!=dto.getId()){
            return new ResponseEntity(HttpStatus.CONFLICT);
        }
        User loginUser = userService.findByUsername(principal.getName());
        if(loginUser.getAuthorities().stream().noneMatch(a->a.getAuthority().equals("ROLE_ADMIN"))
                && loginUser.getId()!=id){
            return new ResponseEntity(HttpStatus.FORBIDDEN);
        }
        User userb = userService.findOne(dto.getId());
        if(loginUser.getAuthorities().stream().anyMatch(a->a.getAuthority().equals("ROLE_ADMIN")) &&
                userb.getAuthorities().stream().anyMatch(a->a.getAuthority().equals("ROLE_ADMIN")) &&
                userb.getId()!=loginUser.getId()){
            return new ResponseEntity(HttpStatus.FORBIDDEN);
        }
        User user;
        dto.setPassword(null);
        if(dto instanceof NastavnikDto){
            user = userService.save(toNastavnik.convert((NastavnikDto) dto));
            if(user==null){
                return new ResponseEntity(HttpStatus.CONFLICT); //user nije izmenjen
            }
            return ResponseEntity.ok(toNastavnikDto.convert((Nastavnik)user));
        }else if(dto instanceof UcenikDto) {
            Ucenik ucenik = userService.findByBrojIndexa(((UcenikDto) dto).getBrojIndexa());
            if(ucenik!=null && ucenik.getId()!=dto.getId()) {
                return new ResponseEntity<>(String.format("Ucenik sa brojem indexa %s vec postoji, izaberite drugi index",
                        ((UcenikDto) dto).getBrojIndexa()),
                        HttpStatus.CONFLICT);
            }
            user = userService.save(toUcenik.convert((UcenikDto) dto));
            if(user==null){
                return new ResponseEntity(HttpStatus.CONFLICT); //user nije izmenjen
            }
            return ResponseEntity.ok(toUcenikDto.convert((Ucenik) user));
        }
        user = userService.save(toUser.convert(dto));
        if(user==null){
            return new ResponseEntity(HttpStatus.CONFLICT); //user nije izmenjen
        }
        return ResponseEntity.ok(toUserDto.convert(user));
    }

    @PatchMapping("/{id}/password")
    public ResponseEntity password(@PathVariable long id, @RequestBody @Validated UserPasswordDto dto, Principal principal){
        User loginUser = userService.findByUsername(principal.getName());
        User user = userService.findOne(id);
        if(loginUser.getId()!=user.getId() &&
                loginUser.getAuthorities().stream().noneMatch(a->a.getAuthority().equals("ROLE_ADMIN"))){
            return new ResponseEntity(HttpStatus.FORBIDDEN);
        }
        if(loginUser.getAuthorities().stream().anyMatch(a->a.getAuthority().equals("ROLE_ADMIN")) &&
                user.getAuthorities().stream().anyMatch(a->a.getAuthority().equals("ROLE_ADMIN")) &&
                user.getId()!=loginUser.getId()){
            return new ResponseEntity(HttpStatus.FORBIDDEN);
        }
        if(loginUser.getAuthorities().stream().noneMatch(a-> a.getAuthority().equals("ROLE_ADMIN"))){
            if(!dto.getNewPassword().equals(dto.getNewPasswordRepeat())){
                return ResponseEntity.badRequest().build();
            }
            if(!new BCryptPasswordEncoder().matches(dto.getOldPassword(),user.getPassword())){
                return ResponseEntity.badRequest().build();
            }
        }
        user = userService.savePassword(toUser.changePassword(dto,user));
        if(user!=null){
            return ResponseEntity.ok().build();
        }
        return ResponseEntity.badRequest().build();
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity delete(@PathVariable String id){
        User user = userService.findByUsernameOrId(id);
        if(user==null){
            return ResponseEntity.notFound().build();
        }
        userService.delete(user.getId());
        return ResponseEntity.noContent().build();
    }

}

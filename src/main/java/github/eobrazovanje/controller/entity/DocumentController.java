package github.eobrazovanje.controller.entity;

import github.eobrazovanje.converter.DokumentDtoToDokument;
import github.eobrazovanje.converter.DokumentToDokumentDto;
import github.eobrazovanje.dto.DocumentDtoPost;
import github.eobrazovanje.dto.DokumentDto;
import github.eobrazovanje.entity.Dokument;
import github.eobrazovanje.entity.Ucenik;
import github.eobrazovanje.entity.User;
import github.eobrazovanje.service.DokumentService;
import github.eobrazovanje.service.TipDokumentaService;
import github.eobrazovanje.service.UserService;
import github.eobrazovanje.storage.StorageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.Errors;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.security.Principal;
import java.util.Arrays;
import java.util.Optional;

/*
  Created by IntelliJ IDEA.
  User: vladimir_antin
  Date: 11.3.18.
  Time: 20.30
*/
@RestController
@RequestMapping("api/dokumenti")
public class DocumentController {

    @Autowired
    private DokumentService dokumentService;

    @Autowired
    private UserService userService;

    @Autowired
    private TipDokumentaService tipDokumentaService;

    @Autowired
    private DokumentDtoToDokument toDokument;

    @Autowired
    private DokumentToDokumentDto toDokumentDto;

    private final StorageService storageService;

    @Autowired
    public DocumentController(StorageService storageService) {
        this.storageService = storageService;
    }
    @PostMapping
    @PreAuthorize("hasAnyRole('ADMIN, STUDENT')")
    public ResponseEntity post(@RequestParam("file") MultipartFile file,
                               @Validated DocumentDtoPost dto, Principal principal, Errors errors){
        if(errors.hasErrors()){
            return ResponseEntity.badRequest().build();
        }
        User loginUser = userService.findByUsername(principal.getName());
        if(dto.getId()!=0){
            return new ResponseEntity(HttpStatus.CONFLICT); //not send id
        }
        if(!(dto.getUcenik().equals(loginUser.getUsername()) || loginUser.isAdmin())){
            return new ResponseEntity(HttpStatus.UNAUTHORIZED);
        }
        Dokument dokument = dokumentService.save(new Dokument()
                .setUcenik((Ucenik) userService.findByUsername(dto.getUcenik()))
                .setTipDokumenta(tipDokumentaService.findOne(dto.getTipDokumenta()))
                .setFilename(""));
        if(dokument!=null && file!=null){
            String urlPhoto="documents/"+ String.valueOf(dokument.getId())+ file.getOriginalFilename();
            dokument = dokumentService.save(dokument.setFilename("api/files/"+urlPhoto));
            if(dokument!=null){
                storageService.store(file,urlPhoto);
            }
        }
        return Optional.ofNullable(dokument).isPresent() ?
                ResponseEntity.status(HttpStatus.CREATED).body(toDokumentDto.convert(dokument))
                : new ResponseEntity(HttpStatus.CONFLICT);
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasAnyRole('ADMIN, STUDENT')")
    public ResponseEntity delete(@PathVariable long id, Principal principal){
        User loginUser = userService.findByUsername(principal.getName());
        Dokument dokument = dokumentService.findOne(id);
        if(!dokument.getUcenik().getUsername().equals(loginUser.getUsername()) || loginUser.isAdmin()){
            return new ResponseEntity(HttpStatus.UNAUTHORIZED);
        }
        if(dokument==null){
            return ResponseEntity.notFound().build();
        }
        dokumentService.delete(dokument.getId());
        return ResponseEntity.noContent().build();
    }

}

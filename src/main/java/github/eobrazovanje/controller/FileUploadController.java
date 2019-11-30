package github.eobrazovanje.controller;

import github.eobrazovanje.storage.StorageFileNotFoundException;
import github.eobrazovanje.storage.StorageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class FileUploadController {

    private final StorageService storageService;

    @Autowired
    public FileUploadController(StorageService storageService) {
        this.storageService = storageService;
    }

    @GetMapping("/api/files/{folder}/{filename:.+}")
    @ResponseBody
    public ResponseEntity<Resource> serveFileProfile(@PathVariable String filename, @PathVariable String folder) {
        Resource file = storageService.loadAsResource(String.format("%s/%s",folder,filename));
        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION,
                        "attachment; filename=\""+file.getFilename()+"\"")
                .body(file);
    }

    @ExceptionHandler(StorageFileNotFoundException.class)
    public ResponseEntity handleStorageFileNotFound(StorageFileNotFoundException exc) {
        return ResponseEntity.notFound().build();
    }
}

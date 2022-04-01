import multer from 'multer';
import path from 'path';

export const storage = multer.diskStorage({
    destination: path.join(__dirname, '../public/uploads'),
    filename: (req,file,cb) => {
        const nameFile = file.originalname.split('.')[0];
        cb(null,nameFile + '-' + Date.now() + path.extname(file.originalname));
    }
});

export const subirImagen = multer({
    storage: storage
}).single('archivo');
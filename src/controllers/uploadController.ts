import { Request, Response } from 'express';

class UploadController {

    public async save(req: Request, res: Response) {
        res.json({
            status: true,
            msg: 'Archivo subido OK!',
            data: {
                fileName: req.file?.filename
            }
        });
    }
}

const uploadController = new UploadController();
export default uploadController;
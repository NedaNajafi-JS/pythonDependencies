const router = require('express').Router();
const spnController = require('./../controllers/spnPanelCon');
const path = require('path');
const multer = require('multer'); 

multer({
    dest: path.dirname(require.main.filename) + '/statics/'
});

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.dirname(require.main.filename) + '/statics/')
    },
    filename: (req, file, cb) => {
        if (file.mimetype == 'application/octet-stream')
            cb(null, file.originalname);
        else{
            req.fileValidationError = 'Invalid file format';
            cb(null, file.originalname);
        }
        
    }
});

let upload = multer({storage: storage});

router.route('/')
.get(spnController.chooseFile/*indexSpn*/);

router.route('/indexSpn')
.get(spnController.indexSpn);

router.route('/load')
.get(spnController.fillData);

router.route('/loadFile')
.post(upload.single('poetry'), spnController.loadFile);

router.route('/createPanel/:name')
.get(spnController.createPanel);

router.route('/:id')
.get(spnController.get);


module.exports = router;
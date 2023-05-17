import React, { useState, ChangeEvent, useEffect } from "react";
import { Button, Input, makeStyles } from "@material-ui/core";
import { AiOutlinePaperClip } from "react-icons/ai";
import { TbPhotoCancel } from "react-icons/tb";

const useStyles = makeStyles((theme) => ({
  previewContainer: {
    marginTop: theme.spacing(2),
    textAlign: "center",
  },
  previewImage: {
    maxWidth: "100%",
    maxHeight: "300px",
    marginTop: theme.spacing(2),
  },
}));

interface IUploadButton {
  setImage: React.Dispatch<React.SetStateAction<string>>;
}

const UploadButton: React.FC<IUploadButton> = ({ setImage }) => {
  const classes = useStyles();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    setSelectedFile(file);

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setPreview(reader.result as string);
      };

      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
  };

  const handleRemove = () => {
    setSelectedFile(null);
    setPreview(null);
  };

  useEffect(() => {
    if (preview) {
      setImage(preview);
    }
  }, [preview, setImage]);
  return (
    <div>
      <Input
        type="file"
        onChange={handleFileChange}
        style={{ display: "none" }}
        inputProps={{ accept: "image/*, .pdf, .doc, .docx" }}
        id="upload-button"
      />
      {!selectedFile && (
        <label htmlFor="upload-button">
          <Button
            variant="contained"
            color="primary"
            component="span"
            style={{
              color: "#72bf44",
              border: "1px solid #72bf44",
              backgroundColor: "#FFFF",
            }}
          >
            <AiOutlinePaperClip />
          </Button>
        </label>
      )}
      {preview && (
        <div className={classes.previewContainer}>
          {selectedFile && selectedFile.type.includes("image") ? (
            <img src={preview} alt="Preview" className={classes.previewImage} />
          ) : (
            <embed src={preview} width="500" height="375" />
          )}
          <Button
            variant="contained"
            color="secondary"
            style={{ fontSize: "1.5rem" }}
            onClick={handleRemove}
          >
            <TbPhotoCancel />
          </Button>
        </div>
      )}
    </div>
  );
};

export default UploadButton;

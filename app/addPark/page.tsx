'use client';
import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Button, TextField, IconButton } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import DeleteIcon from '@mui/icons-material/Delete';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

interface FileWithPreview extends File {
  preview: string;
}

const Page: React.FC = () => {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  const [coverPhoto, setCoverPhoto] = useState<FileWithPreview | null>(null);
  const [bannerPhotos, setBannerPhotos] = useState<FileWithPreview[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    about: '',
    dateOfOp: '',
    contactDetails: '',
    area: '',
    instaProfile: '',
  });

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    setFileState: React.Dispatch<React.SetStateAction<FileWithPreview[]>>
  ) => {
    const newFiles = Array.from(event.target.files || []).map((file) => {
      const preview = URL.createObjectURL(file);
      return { ...file, preview } as FileWithPreview;
    });

    setFileState((prevFiles) => [...prevFiles, ...newFiles]);
  };

  const handleCoverPhotoChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const preview = URL.createObjectURL(file);
      setCoverPhoto({ ...file, preview } as FileWithPreview);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRemoveBannerPhoto = (index: number) => {
    setBannerPhotos((prevPhotos) => prevPhotos.filter((_, i) => i !== index));
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="flex justify-center items-center min-h-screen p-6">
        <div className=" p-8 rounded-lg shadow-lg w-full max-w-3xl">
          <h1 className="text-2xl font-bold mb-6">Create Your Listing</h1>
          <div className="grid grid-cols-1 gap-6">
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              variant="outlined"
              className="w-full"
            />
            <div>
              <Button
                component="label"
                variant="contained"
                startIcon={<CloudUploadIcon />}
                className="bg-blue-500 hover:bg-blue-600 text-white"
              >
                Upload Cover Photo
                <VisuallyHiddenInput
                  type="file"
                  onChange={handleCoverPhotoChange}
                />
              </Button>
              {coverPhoto && (
                <div className="mt-4">
                  <img
                    src={coverPhoto.preview}
                    alt="Cover"
                    className="max-w-full max-h-40 object-cover border rounded-lg"
                  />
                </div>
              )}
            </div>
            <div>
              <Button
                component="label"
                variant="contained"
                startIcon={<CloudUploadIcon />}
                className="bg-blue-500 hover:bg-blue-600 text-white"
              >
                Upload Banner Photos
                <VisuallyHiddenInput
                  type="file"
                  multiple
                  onChange={(e) => handleFileChange(e, setBannerPhotos)}
                />
              </Button>
              <div className="grid grid-cols-3 gap-2 mt-4">
                {bannerPhotos.map((item, index) => (
                  <div key={index} className="relative">
                    <img
                      src={item.preview}
                      alt={`Banner ${index}`}
                      className="w-full h-32 object-cover rounded-lg"
                    />
                    <IconButton
                      className="absolute top-1 right-1 bg-opacity-75 rounded-full"
                      onClick={() => handleRemoveBannerPhoto(index)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </div>
                ))}
              </div>
            </div>
            <TextField
              fullWidth
              label="Location"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              variant="outlined"
              className="w-full"
            />
            <TextField
              fullWidth
              multiline
              rows={4}
              label="About"
              name="about"
              value={formData.about}
              onChange={handleInputChange}
              variant="outlined"
              className="w-full"
            />
            <TextField
              fullWidth
              label="Date of Operation"
              name="dateOfOp"
              type="date"
              value={formData.dateOfOp}
              onChange={handleInputChange}
              variant="outlined"
              InputLabelProps={{ shrink: true }}
              className="w-full"
            />
            <TextField
              fullWidth
              label="Contact Details"
              name="contactDetails"
              value={formData.contactDetails}
              onChange={handleInputChange}
              variant="outlined"
              className="w-full"
            />
            <TextField
              fullWidth
              label="Area"
              name="area"
              value={formData.area}
              onChange={handleInputChange}
              variant="outlined"
              className="w-full"
            />
            <TextField
              fullWidth
              label="Instagram Profile"
              name="instaProfile"
              value={formData.instaProfile}
              onChange={handleInputChange}
              variant="outlined"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Page;

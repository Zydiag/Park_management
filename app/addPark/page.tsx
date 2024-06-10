'use client';
import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Button, TextField, IconButton } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import DeleteIcon from '@mui/icons-material/Delete';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';

const steps = ['Basic Information', 'Cover Photo', 'Banner Photos'];

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

  const [activeStep, setActiveStep] = React.useState(0);
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    about: '',
    dateOfOp: '',
    contactDetails: '',
    area: '',
    instaProfile: '',
    coverPhoto: null as FileWithPreview | null,
    bannerPhotos: [] as FileWithPreview[],
  });

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCoverPhotoChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const preview = URL.createObjectURL(file);
      setFormData({ ...formData, coverPhoto: { ...file, preview } });
    }
  };

  const handleBannerPhotosChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = event.target.files;
    if (files) {
      const newBannerPhotos = Array.from(files).map((file) => {
        const preview = URL.createObjectURL(file);
        return { ...file, preview } as FileWithPreview;
      });
      setFormData({
        ...formData,
        bannerPhotos: [...formData.bannerPhotos, ...newBannerPhotos],
      });
    }
  };

  const handleRemoveBannerPhoto = (index: number) => {
    setFormData({
      ...formData,
      bannerPhotos: formData.bannerPhotos.filter((_, i) => i !== index),
    });
  };

  const handleFormSubmit = () => {
    // Handle form submission with formData
    console.log(formData);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="py-10">
        <Box
          sx={{ width: '80%', margin: '0px auto' }}
          className="flex flex-col gap-10"
        >
          <Stepper activeStep={activeStep}>
            {steps.map((label, index) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <Box>
            {activeStep === steps.length ? (
              <Box>
                <Typography sx={{ mt: 2, mb: 1 }}>
                  All steps completed - you&apos;re finished
                </Typography>
                <Button onClick={handleFormSubmit}>Submit</Button>
              </Box>
            ) : (
              <Box>
                <Typography sx={{ mt: 2, mb: 1 }}>
                  Step {activeStep + 1}
                </Typography>
                <div>
                  {activeStep === 0 && (
                    <div className="flex flex-col gap-4">
                      <TextField
                        fullWidth
                        label="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        variant="outlined"
                        className="w-full"
                      />
                      <TextField
                        fullWidth
                        label="Location"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        variant="outlined"
                        className="w-full mt-4"
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
                        className="w-full mt-4"
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
                        className="w-full mt-4"
                      />
                      <TextField
                        fullWidth
                        label="Contact Details"
                        name="contactDetails"
                        value={formData.contactDetails}
                        onChange={handleInputChange}
                        variant="outlined"
                        className="w-full mt-4"
                      />
                      <TextField
                        fullWidth
                        label="Area"
                        name="area"
                        value={formData.area}
                        onChange={handleInputChange}
                        variant="outlined"
                        className="w-full mt-4"
                      />
                      <TextField
                        fullWidth
                        label="Instagram Profile"
                        name="instaProfile"
                        value={formData.instaProfile}
                        onChange={handleInputChange}
                        variant="outlined"
                        className="w-full mt-4"
                      />
                    </div>
                  )}
                  {activeStep === 1 && (
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
                      {formData.coverPhoto && (
                        <div className="mt-4">
                          <img
                            src={formData.coverPhoto.preview}
                            alt="Cover"
                            className="max-w-full max-h-40 object-cover border rounded-lg"
                          />
                        </div>
                      )}
                    </div>
                  )}
                  {activeStep === 2 && (
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
                          onChange={handleBannerPhotosChange}
                        />
                      </Button>
                      <div className="grid grid-cols-3 gap-2 mt-4">
                        {formData.bannerPhotos.map((item, index) => (
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
                  )}
                </div>
                <div className="mt-4">
                  <Button disabled={activeStep === 0} onClick={handleBack}>
                    Back
                  </Button>
                  <Button onClick={handleNext}>
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div>
              </Box>
            )}
          </Box>
        </Box>
      </div>
    </ThemeProvider>
  );
};

export default Page;

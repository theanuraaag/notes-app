import React from 'react';

const ImageUpload = ({ onImageUpload }) => {
  const handleUpload = () => {
    window.cloudinary.openUploadWidget(
      {
        cloud_name: 'YOUR_CLOUD_NAME',  // Replace with your Cloudinary Cloud Name
        upload_preset: 'YOUR_UPLOAD_PRESET', // Set a preset from your Cloudinary account
        sources: ['local', 'url', 'camera'],
        multiple: false,
        max_file_size: 5000000,
        crop: 'limit',
        client_allowed_formats: ['jpg', 'png'],
      },
      (error, result) => {
        if (result && result.event === 'success') {
          console.log('File uploaded: ', result.info.secure_url);
          onImageUpload(result.info.secure_url);  // Pass the uploaded image URL to the parent
        }
      }
    );
  };

  return (
    <div>
      <button onClick={handleUpload}>Upload Image</button>
    </div>
  );
};

export default ImageUpload;

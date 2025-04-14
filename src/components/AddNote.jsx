import { useState } from 'react';
import axios from 'axios';
import { FiImage } from 'react-icons/fi';

const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const characterLimit = 200;

  const handleChange = (event) => {
    if (characterLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  };

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };
  

  const uploadImageToCloudinary = async () => {
    if (!imageFile) return '';

    const formData = new FormData();
    formData.append('file', imageFile);
    formData.append('upload_preset', 'notesAppPreset'); // 🔁 Replace this
    formData.append('cloud_name', 'dupy58vl4');       // 🔁 Replace this

    try {
      setUploading(true);
      const response = await axios.post(
        'https://api.cloudinary.com/v1_1/dupy58vl4/image/upload', // 🔁 Replace this
        formData
      );
      return response.data.secure_url;
    } catch (error) {
      console.error('Image upload failed:', error);
      return '';
    } finally {
      setUploading(false);
    }
  };

  const handleSaveClick = async () => {
    if (noteText.trim().length > 0) {
      const imageUrl = await uploadImageToCloudinary();
      handleAddNote(noteText, imageUrl);
      setNoteText('');
      setImageFile(null);
      setImagePreview(null);
    }
  };

  return (
    <div className="bg-yellow-100 rounded-lg p-4 flex flex-col justify-between min-h-[200px] shadow-md">
      <textarea
        rows="4"
        placeholder="Type to add a note..."
        className="bg-transparent resize-none outline-none text-black"
        value={noteText}
        onChange={handleChange}
      />
      {imagePreview && (
        <div className="mt-2 mb-2">
          <img
            src={imagePreview}
            alt="preview"
            className="w-full h-auto object-contain rounded-md"
          />
        </div>
      )}
      <label htmlFor="imageUpload" className="cursor-pointer bg-blue-500 text-white py-2 px-4 rounded-md flex items-center justify-center space-x-2 hover:bg-blue-600 transition-colors">
        <FiImage className="text-lg" />
        <span className="text-sm">Choose Image</span>
      </label>
      <input
        id="imageUpload"
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleImageChange}
      />
      <div className="flex items-center justify-between text-black text-sm mt-2">
        <span>{characterLimit - noteText.length} Remaining</span>
        <button
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded"
          onClick={handleSaveClick}
          disabled={uploading}
        >
          {uploading ? 'Uploading...' : 'Save'}
        </button>
      </div>
    </div>
  );
};

export default AddNote;

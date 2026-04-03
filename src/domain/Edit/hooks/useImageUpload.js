import { uploadImage } from '@/api/submissions.api';
import { useState } from 'react';

export function useImageUpload() {
  const [isUploading, setIsUploading] = useState(false);

  const handleImageUpload = async (file) => {
    if (!file) {
      return null;
    }

    try {
      setIsUploading(true);

      const imageUrl = await uploadImage(file);
      return imageUrl;
    } catch (error) {
      alert(error.message || '이미지 업로드에 실패했습니다.');
      return null;
    } finally {
      setIsUploading(false);
    }
  };

  return {
    handleImageUpload,
    isUploading,
  };
}

import { banUser } from '@/api/admin.API';
import { useState } from 'react';


export function useBlockFlow({ checkedRows, onSuccess }) {
  const [isOpen, setIsOpen] = useState(false);

  const openBlockFlow = () => setIsOpen(true);

  const handleConfirm = async (reason) => {
    await Promise.all(checkedRows.map((id) => banUser(id, reason)));
    onSuccess();
  };

  const handleClose = () => setIsOpen(false);

  return {
    isOpen,
    openBlockFlow,
    handleConfirm,
    handleClose,
  };
}
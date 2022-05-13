import { IconButton, Input } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useRef } from 'react';
import { useUpdateColumnMutation } from '../../../store/services/columnsService';
import styles from './style.module.scss';

type Props = {
  currentTitle: string;
  disactivateEdit: () => void;
  boardId: string;
  columnId: string;
  order: number;
};

const ChangeColumnTitle = ({ currentTitle, disactivateEdit, boardId, columnId, order }: Props) => {
  const textarea = useRef<HTMLInputElement>();
  const [updateColumn] = useUpdateColumnMutation();
  const onConfirm = () => {
    textarea.current &&
      updateColumn({
        paths: { boardId, columnId },
        body: { order, title: textarea.current.value },
      });
    disactivateEdit();
  };
  return (
    <>
      <Input
        autoFocus
        defaultValue={currentTitle}
        multiline
        className={styles['column-title']}
        inputRef={textarea}
      />
      <IconButton onClick={onConfirm} size="small" color="success" aria-label="delete column">
        <CheckCircleOutlineIcon />
      </IconButton>
      <IconButton onClick={disactivateEdit} size="small" color="error" aria-label="delete column">
        <HighlightOffIcon />
      </IconButton>
    </>
  );
};

export default ChangeColumnTitle;

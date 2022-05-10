export interface IFromField {
  fields: string[];
}

export interface IInitialFormValues {
  [key: string]: string;
}

export interface IDialogButtonProps {
  btn: (handleOpenDialog: () => void, buttonType: string) => JSX.Element;
  form: (handleCloseDialog: () => void) => JSX.Element;
  type: string; //translation type
  className?: string;
}

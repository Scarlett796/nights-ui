export interface Props {
  visible: boolean;
}

export interface ModalProps {
  children: JSX.Element | string;
  title: string;
  maskable?: boolean;
  cancelText?: string;
  onCancel?: () => void;
  okText?: string;
  onOk?: () => void;
}

export interface Options {
  theme: "default";
}

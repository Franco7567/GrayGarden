type Props = {
    visible: boolean;

    onClose: () => void;

    onSave: (name: string, notes: string) => void;
}
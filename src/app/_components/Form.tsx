interface FormProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

function Form({ open, onClose, children }: FormProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/20">
      <div className="relative h-1/2 w-1/2 bg-white p-4 text-black">
        <button
          className="absolute top-2 right-2 cursor-pointer"
          onClick={onClose}
        >
          Close
        </button>

        {children}
      </div>
    </div>
  );
}

export default Form;

interface TagProps {
  label: string;
}

export const Tag = ({ label }: TagProps) => {
  return (
    <span className="di-cursor-pointer di-relative di-z-10 di-rounded-full di-bg-gray-50 di-px-3 di-py-1.5 di-font-medium di-border-white di-border di-text-gray-600 hover:di-border-gray-300 hover:di-bg-gray-100">
      {label}
    </span>
  );
};

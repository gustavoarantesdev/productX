type ContentContainerProps = {
  children: React.ReactNode;
};

export default function ContentContainer({ children }: ContentContainerProps) {
  return (
    <article className="flex h-full flex-col overflow-y-auto rounded-lg border border-gray-300 bg-white shadow-md">
      {children}
    </article>
  );
}

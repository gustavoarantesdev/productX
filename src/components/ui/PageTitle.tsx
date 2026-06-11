type PageTitleProps = {
  title: string;
};

export default function PageTitle({ title }: PageTitleProps) {
  return (
    <>
      <h1 className="text-xl font-semibold p-4">{title}</h1>
    </>
  );
}

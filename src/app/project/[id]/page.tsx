import "@/mdx-components.css";

interface Params {
  params: Promise<{ id: string }>;
}

export default async function ProjectPage({ params }: Params) {
  const id = (await params).id;
  const { default: ProjectContent } = await import(`@/contents/project/${id}.mdx`);

  return (
    <main className="mdx-container">
      <ProjectContent />
    </main>
  );
}

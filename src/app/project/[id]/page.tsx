interface Params {
  params: Promise<{ id: string }>;
}

export default async function ProjectPage({ params }: Params) {
  const id = (await params).id;
  const { default: ProjectContent } = await import(`@/contents/${id}.mdx`);

  return <ProjectContent />;
}

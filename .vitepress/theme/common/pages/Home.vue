<template>
  <Page>
    <section>
      <PageTitle title="Welcome!" />

      <div
        class="mt-12 rounded-xl border border-deskfolio-bg-lighter bg-deskfolio-bg-light p-8 shadow-xl"
      >
        <Prose class="prose-lg">
          <Content />
        </Prose>
      </div>
    </section>

    <section>
      <h2 class="text-3xl font-semibold text-deskfolio-text">Find me online</h2>

      <div class="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
        <Button
          color="secondary"
          label="Bluesky"
          href="https://bsky.app/profile/driky.bsky.social"
          target="_blank"
        />

        <Button
          color="secondary"
          label="GitHub"
          href="https://github.com/Driky"
          target="_blank"
        />

        <Button
          color="secondary"
          label="LinkedIn"
          href="https://www.linkedin.com/in/cedric-on-the-grid/"
          target="_blank"
        />

      </div>
    </section>
  </Page>
</template>

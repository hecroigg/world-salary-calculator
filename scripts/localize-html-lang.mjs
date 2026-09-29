import { readdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

const localeDirectories = {
  es: "es",
  de: "de",
  fr: "fr",
};

async function localizeHtmlFiles(directory, locale) {
  const entries = await readdir(directory, { withFileTypes: true });

  await Promise.all(
    entries.map(async (entry) => {
      const path = join(directory, entry.name);

      if (entry.isDirectory()) {
        await localizeHtmlFiles(path, locale);
        return;
      }

      if (!entry.isFile() || !entry.name.endsWith(".html")) return;

      const html = await readFile(path, "utf8");
      const localizedHtml = html.replace(
        /<html lang="en"/,
        `<html lang="${locale}"`,
      );

      if (localizedHtml !== html) {
        await writeFile(path, localizedHtml);
      }
    }),
  );
}

await Promise.all(
  Object.entries(localeDirectories).map(([locale, directory]) =>
    localizeHtmlFiles(join("out", directory), locale),
  ),
);

console.log("Localized static HTML lang attributes for es, de and fr.");

import sharp from 'sharp';
import { readdir, mkdir } from 'fs/promises';
import { join, basename, parse } from 'path';

const sourceImages = [
  'C:/Users/maxwe/Downloads/_DSC5723-HDR.webp',
  'C:/Users/maxwe/Downloads/DSCF6507.webp',
  'C:/Users/maxwe/Downloads/_DSC5669-HDR.webp',
  'C:/Users/maxwe/Downloads/_DSC5681-HDR.webp',
  'C:/Users/maxwe/Downloads/_DSC5660-HDR.webp',
  'C:/Users/maxwe/Downloads/_DSC5825-HDR.webp',
  'C:/Users/maxwe/Downloads/DSCF6460.webp',
  'C:/Users/maxwe/Downloads/DSCF6472.webp',
  'C:/Users/maxwe/Downloads/_DSC5843-HDR.webp',
];

const outputDir = 'C:/Users/maxwe/projects/brite-labs/public/images/universities';
const maxWidth = 1920;
const quality = 80;

async function processImage(inputPath) {
  const filename = parse(basename(inputPath)).name;
  const outputPath = join(outputDir, `${filename}.avif`);

  try {
    const metadata = await sharp(inputPath).metadata();
    console.log(`Processing: ${filename}`);
    console.log(`  Original: ${metadata.width}x${metadata.height}`);

    await sharp(inputPath)
      .resize(maxWidth, null, {
        withoutEnlargement: true,
        fit: 'inside'
      })
      .avif({ quality })
      .toFile(outputPath);

    const outputMetadata = await sharp(outputPath).metadata();
    const stats = await import('fs').then(fs => fs.promises.stat(outputPath));

    console.log(`  Output: ${outputMetadata.width}x${outputMetadata.height}`);
    console.log(`  Size: ${(stats.size / 1024).toFixed(0)}KB`);
    console.log(`  Saved to: ${outputPath}\n`);

    return { success: true, filename, outputPath };
  } catch (error) {
    console.error(`  Error processing ${filename}: ${error.message}\n`);
    return { success: false, filename, error: error.message };
  }
}

async function main() {
  console.log('Processing university gallery images...\n');
  console.log(`Output directory: ${outputDir}`);
  console.log(`Max width: ${maxWidth}px`);
  console.log(`AVIF quality: ${quality}\n`);
  console.log('---\n');

  const results = [];

  for (const imagePath of sourceImages) {
    const result = await processImage(imagePath);
    results.push(result);
  }

  console.log('---\n');
  console.log('Summary:');
  console.log(`  Processed: ${results.filter(r => r.success).length}/${results.length}`);

  const failed = results.filter(r => !r.success);
  if (failed.length > 0) {
    console.log(`  Failed: ${failed.map(r => r.filename).join(', ')}`);
  }
}

main().catch(console.error);

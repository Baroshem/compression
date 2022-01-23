import type { ZlibOptions, BrotliOptions } from 'zlib';

// vite-plugin-compression types
export type CompressOptions = Partial<ZlibOptions> | Partial<BrotliOptions>;
export interface CompressionOptions {
  /**
   * Log compressed files and their compression ratios.
   * @default: true
   */
  verbose?: boolean;
  /**
   * Minimum file size before compression is used.
   * @default 1025
   */
  threshold?: number;
  /**
   * Filter files that do not need to be compressed
   * @default /\.(js|mjs|json|css|html)$/i
   */
  filter?: RegExp | ((file: string) => boolean);

  /**
   * Whether to enable compression
   * @default: false
   */
  disable?: boolean;
  /**
   * Compression algorithm
   * @default gzip
   */
  algorithm?: 'gzip' | 'brotliCompress' | 'deflate' | 'deflateRaw';

  /**
   * File format after compression
   * @default .gz
   */
  ext?: string;

  /**
   * Compression Options
   */
  compressionOptions?: CompressOptions;
  /**
   * Delete the corresponding source file after compressing the file
   * @default: false
   */
  deleteOriginFile?: boolean;

  /**
   * success callback after completed
   */
  success?: () => void;
}

import { Module } from '@nestjs/common';
import { MudarArquivoService } from './mudar-arquivo.service';
import { MudarArquivoController } from './mudar-arquivo.controller';

@Module({
  controllers: [MudarArquivoController],
  providers: [MudarArquivoService],
})
export class MudarArquivoModule {}

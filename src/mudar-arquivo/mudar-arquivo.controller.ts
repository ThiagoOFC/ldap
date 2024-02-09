import { Controller, Post, Body } from '@nestjs/common';
import { MudarArquivoService } from './mudar-arquivo.service';
import { CreateMudarArquivoDto } from './dto/create-mudar-arquivo.dto';

@Controller('mudar-arquivo')
export class MudarArquivoController {
  constructor(private readonly mudarArquivoService: MudarArquivoService) {}

  @Post()
  create(@Body() createMudarArquivoDto: CreateMudarArquivoDto) {
    return this.mudarArquivoService.create(createMudarArquivoDto);
  }
}

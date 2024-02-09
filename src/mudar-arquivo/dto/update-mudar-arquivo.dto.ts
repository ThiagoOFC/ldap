import { PartialType } from '@nestjs/mapped-types';
import { CreateMudarArquivoDto } from './create-mudar-arquivo.dto';

export class UpdateMudarArquivoDto extends PartialType(CreateMudarArquivoDto) {}

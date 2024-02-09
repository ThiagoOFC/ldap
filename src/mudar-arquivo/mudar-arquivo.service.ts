import { Injectable } from '@nestjs/common';
import { CreateMudarArquivoDto } from './dto/create-mudar-arquivo.dto';
import * as fs from 'fs';
import { exec } from 'child_process';

@Injectable()
export class MudarArquivoService {
  create(createMudarArquivoDto: CreateMudarArquivoDto) {
    const caminhoDoArquivo = '/home/thiago-ti/workspace/teste.sh';
    const user = createMudarArquivoDto.nome;
    const password = createMudarArquivoDto.senha;
    return new Promise((resolve, reject) => {
      exec(
        `bash ${caminhoDoArquivo} ${user} ${password}`,
        (erro, stdout, stderr) => {
          if (erro) {
            reject(`Erro ao executar o script: ${erro.message}`);
          } else {
            resolve(stdout);
          }
        },
      );
    });
  }
}

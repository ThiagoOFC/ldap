import { Test, TestingModule } from '@nestjs/testing';
import { MudarArquivoController } from './mudar-arquivo.controller';
import { MudarArquivoService } from './mudar-arquivo.service';

describe('MudarArquivoController', () => {
  let controller: MudarArquivoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MudarArquivoController],
      providers: [MudarArquivoService],
    }).compile();

    controller = module.get<MudarArquivoController>(MudarArquivoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

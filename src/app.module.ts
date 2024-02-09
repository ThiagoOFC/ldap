import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MudarArquivoModule } from './mudar-arquivo/mudar-arquivo.module';

@Module({
  imports: [MudarArquivoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

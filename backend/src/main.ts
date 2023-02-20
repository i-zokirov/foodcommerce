import { NestFactory } from "@nestjs/core";
import {
    SwaggerModule,
    DocumentBuilder,
    SwaggerCustomOptions,
} from "@nestjs/swagger";
import { AppModule } from "./app.module";

const customOptions: SwaggerCustomOptions = {
    customSiteTitle: "foodcommerce API Doc",
};
const config = new DocumentBuilder()
    .setTitle("Food Delivery App")
    .setDescription("Food Delivery App backend API built with NestJS")
    .setVersion("1.0")
    .addTag("foodcommerce")
    .build();

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup("api", app, document, customOptions);
    await app.listen(3000);
}
bootstrap();

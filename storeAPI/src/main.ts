import { NestFactory } from "@nestjs/core";
import {
    SwaggerModule,
    DocumentBuilder,
    SwaggerCustomOptions,
} from "@nestjs/swagger";
import { AppModule } from "./app.module";

const customOptions: SwaggerCustomOptions = {
    customSiteTitle: "Delivery App API Docs",
    swaggerOptions: {
        authActions: {
            bearerAuth: {
                name: "Bearer",
                schema: {
                    type: "apiKey",
                    in: "header",
                    name: "Authorization",
                },
            },
            value: "Bearer <JWT>",
        },
    },
};
const config = new DocumentBuilder()
    .setTitle("Food Delivery App")
    .setDescription("Food Delivery App backend API built with NestJS")
    .setVersion("1.0")
    .addBearerAuth(
        { type: "http", scheme: "bearer", bearerFormat: "JWT" },
        "JWT"
    )
    .addTag("foodcommerce")
    .build();

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup("api", app, document, customOptions);
    await app.listen(3000);
}
bootstrap();

import swaggerJSDoc from "swagger-jsdoc";

const swaggerSpec = swaggerJSDoc({
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Ломбард API",
      version: "1.0.0",
      description: "API для роботи з ломбардами",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
    components: {
      schemas: {
        Client: {
          type: "object",
          required: [
            "firstName",
            "lastName",
            "middleName",
            "passportNumber",
            "passportSeries",
            "passportIssueDate",
          ],
          properties: {
            firstName: {
              type: "string",
              description: "Ім'я клієнта",
              minLength: 1,
              maxLength: 15,
              example: "Іван",
            },
            lastName: {
              type: "string",
              description: "Прізвище клієнта",
              minLength: 1,
              maxLength: 15,
              example: "Іванов",
            },
            middleName: {
              type: "string",
              description: "По батькові клієнта",
              minLength: 1,
              maxLength: 15,
              example: "Іванович",
            },
            passportNumber: {
              type: "string",
              description: "Номер паспорта клієнта",
              minLength: 8,
              maxLength: 8,
              example: "12345678",
            },
            passportSeries: {
              type: "string",
              description: "Серія паспорта клієнта",
              minLength: 2,
              maxLength: 2,
              example: "AA",
            },
            passportIssueDate: {
              type: "string",
              format: "date",
              description: "Дата видачі паспорта",
              example: "2010-01-01",
            },
          },
        },
        Item: {
          type: "object",
          required: ["category", "name"],
          properties: {
            category: {
              type: "string",
              description: "Категорія товару",
              example: "Електроніка",
            },
            name: {
              type: "string",
              description: "Назва товару",
              minLength: 5,
              maxLength: 120,
              example: "Телефон Samsung Galaxy",
            },
            note: {
              type: "string",
              description: "Примітка до товару",
              minLength: 3,
              maxLength: 1000,
              example:
                "Телефон в хорошому стані, незначні подряпини на корпусі",
            },
          },
        },
        Pawn: {
          type: "object",
          required: [
            "clientId",
            "itemId",
            "description",
            "pawnDate",
            "returnDate",
            "amount",
            "commission",
          ],
          properties: {
            clientId: {
              type: "string",
              description: "ID клієнта (посилання на Client)",
              example: "60d21b4667d0d8992e610c85",
            },
            itemId: {
              type: "string",
              description: "ID товару (посилання на Item)",
              example: "60d21b4667d0d8992e610c84",
            },
            description: {
              type: "string",
              description: "Опис товару",
              minLength: 3,
              maxLength: 1000,
              example:
                "Телефон Samsung Galaxy, працює без проблем, має деякі подряпини на корпусі",
            },
            pawnDate: {
              type: "string",
              format: "date",
              description: "Дата здачі товару в ломбард",
              example: "2025-03-22",
              minLength: 10,
              maxLength: 10,
            },
            returnDate: {
              type: "string",
              format: "date",
              description: "Дата повернення товару",
              example: "2025-06-22",
              minLength: 10,
              maxLength: 10,
            },
            amount: {
              type: "number",
              description: "Сума позики",
              example: 5000,
              minimum: 1,
              maximum: 500000,
            },
            commission: {
              type: "number",
              description: "Комісія ломбарду",
              example: 500,
              minimum: 1,
              maximum: 500000,
            },
          },
        },
        PawnResponse: {
          type: "object",
          properties: {
            _id: {
              type: "string",
              description: "Унікальний ідентифікатор запису",
              example: "60d21b4667d0d8992e610c86",
            },
            client: {
              $ref: "#/components/schemas/Client",
            },
            item: {
              $ref: "#/components/schemas/Item",
            },
            description: {
              type: "string",
              description: "Опис товару",
              minLength: 3,
              maxLength: 1000,
              example:
                "Телефон Samsung Galaxy, працює без проблем, має деякі подряпини на корпусі",
            },
            pawnDate: {
              type: "string",
              format: "date",
              description: "Дата здачі товару в ломбард",
              example: "2025-03-22",
            },
            returnDate: {
              type: "string",
              format: "date",
              description: "Дата повернення товару",
              example: "2025-06-22",
            },
            amount: {
              type: "number",
              description: "Сума позики",
              example: 5000,
              minimum: 1,
              maximum: 500000,
            },
            commission: {
              type: "number",
              description: "Комісія ломбарду",
              example: 500,
              minimum: 1,
              maximum: 500000,
            },
          },
        },
      },
    },
  },
  apis: ["./src/routes/*.js"], // Шлях до маршрутів
});

export default swaggerSpec;

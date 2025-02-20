export const quizCategories = {
  sist_gest_empres: [
    {
      question: '¿Qué es un "addon" en Odoo?',
      options: [
        {
          text: "Una extensión que agrega funcionalidades adicionales a Odoo.",
          correct: true,
        },
        { text: "Un tema de diseño para el frontend.", correct: false },
        { text: "Un archivo de configuración del sistema.", correct: false },
      ],
    },
    {
      question:
        "En informes de tipo filtrado de Odoo, para poder realizar agrupaciones por parámetros deberemos…:",
      options: [
        { text: "Usar el desplegable Agrupar por", correct: true },
        { text: "Usar el desplegable Fecha", correct: false },
        { text: "Usar el desplegable Filtros", correct: false },
      ],
    },
    {
      question: "La información de los modelos de Odoo se almacenan mediante…:",
      options: [
        { text: "filas.", correct: false },
        { text: "entidades.", correct: false },
        { text: "campos.", correct: true },
      ],
    },
    {
      question: '¿Qué es el "data governance" (gobernanza de datos)?',
      options: [
        { text: "El proceso de normalización de datos.", correct: false },
        {
          text: "La gestión de la disponibilidad, integridad y seguridad de los datos.",
          correct: true,
        },
        { text: "Un tipo de índice.", correct: false },
      ],
    },
    {
      question:
        "La consulta SELECT * FROM res_partner dentro de la base de datos de Odoo, ¿Qué nos devuelve?",
      options: [
        { text: "El listado de socios.", correct: true },
        { text: "El listado de clientes.", correct: false },
        { text: "El listado de usuarios.", correct: false },
      ],
    },
    {
      question: "¿Qué es una auditoría en el contexto de ERP-CRM?",
      options: [
        { text: "Un proceso para instalar hardware adicional", correct: false },
        { text: "Un proceso para crear gráficos y tablas.", correct: false },
        {
          text: "Un proceso para verificar la integridad y exactitud de los datos.",
          correct: true,
        },
      ],
    },
    {
      question:
        "Odoo usa hibernate para gestionar la persistencia de los modelos de datos en la base de datos:",
      options: [
        { text: "La afirmación es incorrecta.", correct: true },
        { text: "La afirmación es correcta.", correct: false },
        { text: "Depende de la instalación que hagamos.", correct: false },
      ],
    },
    {
      question: "¿Qué dos tipos de logs hay en una instalación de Odoo?:",
      options: [
        { text: "del compilador python y la base de datos.", correct: false },
        {
          text: "del servidor de aplicaciones y la base de datos.",
          correct: true,
        },
        { text: "de la base de datos y el servidor apache.", correct: false },
      ],
    },
    {
      question: "¿Qué es una migración de datos en la implantación de un ERP?",
      options: [
        {
          text: "El proceso de cambiar el diseño de una página web.",
          correct: false,
        },
        { text: "El proceso de crear contenido multimedia.", correct: false },
        {
          text: "El proceso de transferir datos de un sistema antiguo a uno nuevo.",
          correct: true,
        },
      ],
    },
    {
      question: "¿Qué es la personalización en un sistema ERP-CRM?",
      options: [
        {
          text: "Cambiar los colores de la interfaz del software.",
          correct: false,
        },
        {
          text: "Ajustar el software para que se adapte a las necesidades específicas de la empresa.",
          correct: true,
        },
        {
          text: "Instalar el software en dispositivos móviles.",
          correct: false,
        },
      ],
    },
    {
      question: "¿Qué es un cuadro de mando?:",
      options: [
        {
          text: "Un tipo de informe que suele combinar diferentes tipos de elementos para conseguir el objetivo de poder tener indicadores y parámetros de medición para tomar decisiones",
          correct: true,
        },
        {
          text: "Un tipo de informe para gestionar la información empresarial relacionada entre si.",
          correct: false,
        },
        {
          text: "Un tipo de página web con el historico del indicador más importante para tomar decisiones.",
          correct: false,
        },
      ],
    },
    {
      question: "¿Para qué sirve JasperReports?:",
      options: [
        { text: "Para crear informes visuales.", correct: true },
        { text: "Para convertir informes a pdf.", correct: false },
        { text: "Para crear páginas web.", correct: false },
      ],
    },
    {
      question: "El lenguaje JavaScript ¿se usa en Odoo?:",
      options: [
        { text: "Si, en las vistas.", correct: true },
        { text: "Si, en los controladores.", correct: false },
        { text: "Si, en los modelos.", correct: false },
      ],
    },
    {
      question: "¿Qué es un sistema transaccional?",
      options: [
        { text: "Un sistema de almacenamiento de datos.", correct: false },
        {
          text: "Un sistema diseñado para ejecutar y gestionar transacciones empresariales.",
          correct: true,
        },
        { text: "Un tipo de consulta SQL.", correct: false },
      ],
    },
    {
      question:
        "Dentro de Visual Studio Code deberemos instalar extensiones para ayudarnos durante la programación, una de ellas es:",
      options: [
        { text: "SCRUM.", correct: false },
        { text: "PostgreSQL.", correct: false },
        { text: "Python.", correct: true },
      ],
    },
    {
      question:
        "¿Cuál es la principal función de un ORM (Object-Relational Mapping) en el desarrollo de componentes para un ERP?",
      options: [
        { text: "Gestionar la interfaz de usuario.", correct: false },
        {
          text: "Mapear objetos de la aplicación a una base de datos relacional.",
          correct: true,
        },
        { text: "Crear contenido multimedia.", correct: false },
      ],
    },
    {
      question:
        "¿Podemos crear un módulo de Odoo con otro lenguaje que no sea Python?:",
      options: [
        { text: "Si, con Javascript.", correct: false },
        { text: "Si, con PHP.", correct: false },
        { text: "No, solo con Python.", correct: true },
      ],
    },
    {
      question:
        "Dentro de un módulo cómo podemos definir una relación muchos a muchos:",
      options: [
        { text: "one2many.", correct: false },
        { text: "many2one.", correct: false },
        { text: "many2many.", correct: true },
      ],
    },
    {
      question: "¿Cómo se define una función en Python?:",
      options: [
        { text: "let nombre_funcion(parámetros):", correct: false },
        { text: "def nombre_funcion(parámetros):", correct: true },
        { text: "define nombre_funcion(parámetros):", correct: false },
      ],
    },
    {
      question:
        "Depurar un programa consiste en encontrar y corregir los problemas que pueda tener el código del mismo:",
      options: [
        { text: "Es falso.", correct: false },
        { text: "Depende del lenguaje.", correct: false },
        { text: "Cierto.", correct: true },
      ],
    },
    {
      question:
        "¿Cuándo utilizo Python cuál es el símbolo de carácter genérico dentro de la definición de un parámetro?:",
      options: [
        { text: "%g.", correct: true },
        { text: "%i.", correct: false },
        { text: "%f.", correct: false },
      ],
    },
    {
      question:
        "¿Qué es la integración continua en el desarrollo de componentes?",
      options: [
        { text: "Un proceso para diseñar gráficos.", correct: false },
        { text: "Un tipo de base de datos.", correct: false },
        {
          text: "Una práctica de desarrollo de software en la que el código se integra frecuentemente en un repositorio compartido.",
          correct: true,
        },
      ],
    },
    {
      question:
        "Cuando se realizan consultas a grandes bases de datos, ¿cómo podemos optimizar las consultas para que el rendimiento del sistema mejore o sea el óptimo?:",
      options: [
        {
          text: "Incorporando más claves primarias en las tablas",
          correct: false,
        },
        {
          text: "Almacenar en cache los datos que son usados en la sesión.",
          correct: true,
        },
        {
          text: "Aumentar el número de consultas realizadas desde la aplicación.",
          correct: false,
        },
      ],
    },
    {
      question: "¿Qué es un entorno de desarrollo integrado (IDE)?",
      options: [
        { text: "Un sistema de gestión de bases de datos.", correct: false },
        { text: "Un programa que permite editar imágenes.", correct: false },
        {
          text: "Un software que proporciona herramientas completas para el desarrollo de software, como edición de código, depuración y compilación.",
          correct: true,
        },
      ],
    },
    {
      question:
        "¿Cuál de los siguientes lenguajes de programación es comúnmente utilizado para desarrollar componentes en un ERP?",
      options: [
        { text: "HTML.", correct: false },
        { text: "CSS.", correct: false },
        { text: "Python.", correct: true },
      ],
    },
    {
      question: "¿Podemos crear un módulo en Odoo sin un modelo asociado?:",
      options: [
        { text: "No, a no ser que tampoco creemos una vista.", correct: false },
        { text: "Si, los modelos no son necesarios.", correct: false },
        { text: "No, siempre es necesario al menos un modelo.", correct: true },
      ],
    },
    {
      question:
        "¿Qué parte de un módulo en Odoo declara las rutas que el navegador puede realizar?:",
      options: [
        { text: "Vistas.", correct: false },
        { text: "Formularios.", correct: false },
        { text: "Controladores web.", correct: true },
      ],
    },
    {
      question: "¿Como accedemos a la definición de las vistas de Odoo?:",
      options: [
        {
          text: "A través del módulo de configuración del sistema.",
          correct: false,
        },
        { text: "A través del menú técnico.", correct: true },
        {
          text: "A través de un IDE de HTML como Visual Studio.",
          correct: false,
        },
      ],
    },
    {
      question: "¿Qué es una tabla en una base de datos?",
      options: [
        { text: "Un tipo de índice.", correct: false },
        {
          text: "Una estructura que organiza los datos en filas y columnas.",
          correct: true,
        },
        { text: "Una representación gráfica de datos.", correct: false },
      ],
    },
    {
      question: "¿Cómo activamos el modo desarrollador en Odoo?:",
      options: [
        { text: "Desde el módulo de usuarios.", correct: false },
        { text: "Desde la configuración del usuario.", correct: false },
        { text: "Desde el menú de ajustes.", correct: true },
      ],
    },
    {
      question: "¿Qué es integridad de datos?",
      options: [
        { text: "El proceso de duplicar datos.", correct: false },
        { text: "El almacenamiento de datos en discos duros.", correct: false },
        {
          text: "El mantenimiento de la precisión y consistencia de los datos.",
          correct: true,
        },
      ],
    },
    {
      question:
        "¿Qué herramienta de Odoo permite enviar campañas de marketing por correo electrónico?",
      options: [
        { text: "Website.", correct: false },
        { text: "Email Marketing.", correct: true },
        { text: "CRM.", correct: false },
      ],
    },
    {
      question: "¿Qué es PostgreSQL?",
      options: [
        { text: "Un lenguaje de programación.", correct: false },
        { text: "Un sistema operativo.", correct: false },
        {
          text: "Un sistema de gestión de bases de datos relacional.",
          correct: true,
        },
      ],
    },
    {
      question: "¿Qué lenguaje no se usa en Odoo?:",
      options: [
        { text: "Python.", correct: false },
        { text: "HTML.", correct: false },
        { text: "Ruby.", correct: true },
      ],
    },
    {
      question: "Las tablas que son “core” de Odoo comienzan con el sufijo…",
      options: [
        { text: "base.", correct: true },
        { text: "root.", correct: false },
        { text: "core.", correct: false },
      ],
    },
    {
      question:
        "¿Cuál es la principal diferencia entre Odoo Community y Odoo Enterprise?",
      options: [
        {
          text: "Odoo Community es gratuito y de código abierto, mientras que Odoo Enterprise ofrece características adicionales y soporte comercial.",
          correct: true,
        },
        {
          text: "Odoo Community se usa solo para desarrollo y Odoo Enterprise solo para producción.",
          correct: false,
        },
        {
          text: "Odoo Community es de pago y Odoo Enterprise es gratuito.",
          correct: false,
        },
      ],
    },
    {
      question: "¿Qué significa la sigla SQL?",
      options: [
        { text: "Simple Query Language.", correct: false },
        { text: "Structured Query Language.", correct: true },
        { text: "Standard Query Language.", correct: false },
      ],
    },
    {
      question:
        "Si queremos acceder a las tablas que contienen toda la información de Odoo para realizar operaciones de administración, debemos usar…",
      options: [
        { text: "El terminal de comandos.", correct: false },
        { text: "PgAdmin.", correct: true },
        { text: "phpMyAdmin.", correct: false },
      ],
    },
    {
      question: "¿Debemos instalar una aplicación cliente para usar Odoo?:",
      options: [
        { text: "No, se usa desde cualquier navegador web", correct: true },
        { text: "Si, debemos usar el cliente oficial", correct: false },
        {
          text: "Si, debemos usar un navegador específico para sistemas ERP",
          correct: false,
        },
      ],
    },
    {
      question: "¿Qué base de datos usa Odoo?:",
      options: [
        { text: "PostgreSQL.", correct: true },
        { text: "MongoDB.", correct: false },
        { text: "MySQL.", correct: false },
      ],
    },
    {
      question: "La base de datos de Odoo se puede gestionar desde…",
      options: [
        { text: "phpMyAdmin", correct: false },
        { text: "SQLCreator", correct: false },
        { text: "PgAdmin", correct: true },
      ],
    },
    {
      question:
        "¿Con qué herramienta podríamos realizar el seguimiento y auditoría de los usuarios de Odoo?:",
      options: [
        { text: "El administrador del sistema.", correct: false },
        { text: "PgAdmin", correct: true },
        { text: "NetSQL", correct: false },
      ],
    },
    {
      question: "¿Qué es una base de datos NoSQL?",
      options: [
        {
          text: "Una base de datos diseñada para manejar datos no estructurados y semiestructurados.",
          correct: true,
        },
        {
          text: "Una base de datos que solo acepta consultas SQL.",
          correct: false,
        },
        { text: "Un sistema operativo.", correct: false },
      ],
    },
    {
      question: "¿Qué es una estrategia de backup incremental?",
      options: [
        { text: "Un backup completo de todos los datos.", correct: false },
        { text: "Un backup que se realiza en tiempo real.", correct: false },
        {
          text: "Un backup que solo copia los datos que han cambiado desde el último backup.",
          correct: true,
        },
      ],
    },
    {
      question:
        "¿Qué herramienta con versión gratuita podemos crear informes externos a Odoo?:",
      options: [
        { text: "JasperReports.", correct: true },
        { text: "JasperBuilder.", correct: false },
        { text: "CrystalReports.", correct: false },
      ],
    },
    {
      question:
        "¿Qué nombre recibe el historial de las acciones eventos y errores de un programa?:",
      options: [
        { text: "Samples.", correct: false },
        { text: "Outputs.", correct: false },
        { text: "Log.", correct: true },
      ],
    },
    {
      question:
        "Una herramienta que tiene una versión community para la realización de cuadros de mando es:",
      options: [
        { text: "Pentaho.", correct: true },
        { text: "QlikView.", correct: false },
        { text: "Power BI.", correct: false },
      ],
    },
    {
      question: "¿Cuál es una ventaja clave de usar un ERP?",
      options: [
        { text: "Mayor desorganización en los procesos.", correct: false },
        { text: "Mayor dificultad en la toma de decisiones.", correct: false },
        {
          text: "Mayor eficiencia y coherencia en la información.",
          correct: true,
        },
      ],
    },
    {
      question: "¿Qué hace el comando odoo-bin scaffold?:",
      options: [
        { text: "Crea un nuevo módulo vacío.", correct: true },
        {
          text: "Prepara los archivos necesarios para personalizar Odoo.",
          correct: false,
        },
        { text: "Crea un nuevo modelo.", correct: false },
      ],
    },
    {
      question: "¿Qué es una biblioteca de componentes?",
      options: [
        { text: "Un sistema operativo.", correct: false },
        {
          text: "Un repositorio de componentes reutilizables que pueden ser usados en diferentes aplicaciones.",
          correct: true,
        },
        { text: "Un archivo de imagen.", correct: false },
      ],
    },
    {
      question:
        "En SCRUM, la recopilación de las especificaciones funcionales las tenemos en:",
      options: [
        { text: "El Prodcut BackLog", correct: true },
        { text: "En las sesiones de retrospectiva", correct: false },
        { text: "Los Sprints", correct: false },
      ],
    },
    {
      question:
        "El comando de consola odoo-bin scaffold, ¿crea un nuevo módulo de Odoo?:",
      options: [
        { text: "Si, crea un módulo vacío.", correct: true },
        {
          text: "Si, lo crea con el mismo contenido que el último módulo instalado.",
          correct: false,
        },
        { text: "Es posible, depende del sistema operativo.", correct: false },
      ],
    },
    {
      question: "La palabra reservada para definir una función en Python es:",
      options: [
        { text: "class.", correct: false },
        { text: "function.", correct: false },
        { text: "def.", correct: true },
      ],
    },
    {
      question:
        "Cuando tenemos un mensaje de error debido al desarrollo, el fichero concreto donde se ha producido el error viene dado en:",
      options: [
        { text: "El mensaje de contexto.", correct: true },
        { text: "El fichero donde se produjo el error.", correct: false },
        { text: "La vista misma de Odoo.", correct: false },
      ],
    },
    {
      question: "En una instalación de Odoo, PgAdmin sirve para …",
      options: [
        {
          text: "Administrar la política de acceso de usuarios.",
          correct: false,
        },
        { text: "Administrar una base de datos PostgreSQL.", correct: true },
        { text: "Administrar una base de datos en MySQL.", correct: false },
      ],
    },
    {
      question: "¿Se puede usar Odoo con un servidor MongoDB?:",
      options: [
        { text: "Usando el método swap", correct: false },
        { text: "No, solo se puede usar PostgreSQL", correct: true },
        { text: "Si, mediante el conector integrado", correct: false },
      ],
    },
    {
      question: "Desde el menú de ajustes de Odoo podemos …:",
      options: [
        { text: "Activar el modo desarrollador.", correct: true },
        { text: "Acceder a las tablas de la base de datos.", correct: false },
        { text: "Configurar el usuario root.", correct: false },
      ],
    },
    {
      question: "¿Para qué no es necesario usar el menú técnico en Odoo?:",
      options: [
        { text: "Para crear nuevos usuarios.", correct: true },
        { text: "Para definir nuevos modelos.", correct: false },
        { text: "Para modificar las vistas.", correct: false },
      ],
    },
    {
      question: '¿Cuál es la función del módulo "Manufacturing" en Odoo?',
      options: [
        { text: "Administrar el sitio web de la empresa.", correct: false },
        { text: "Gestionar la contabilidad de la empresa.", correct: false },
        {
          text: "Planificar y controlar los procesos de producción.",
          correct: true,
        },
      ],
    },
    {
      question: "¿Con que lenguaje se programa Odoo?:",
      options: [
        { text: "Python.", correct: true },
        { text: "Java.", correct: false },
        { text: "C++.", correct: false },
      ],
    },
    {
      question: "¿Qué es redundancia de datos?",
      options: [
        { text: "Almacenamiento eficiente de datos.", correct: false },
        { text: "Proceso de normalización de datos.", correct: false },
        {
          text: "Almacenamiento de la misma información en varios lugares.",
          correct: true,
        },
      ],
    },
    {
      question: "¿Qué es un log?:",
      options: [
        {
          text: "Historial o registro de las acciones, eventos o errores.",
          correct: true,
        },
        { text: "Un trozo de madera con bugs del sistema.", correct: false },
        { text: "Un módulo de Odoo.", correct: false },
      ],
    },
    {
      question:
        "En informe tipo filtrado, para poder realizar agrupaciones por parámetros deberemos:",
      options: [
        { text: "Usar el desplegable fecha.", correct: false },
        { text: "Usar el desplegable filtros.", correct: false },
        { text: "Usar el desplegable agrupar por.", correct: true },
      ],
    },
    {
      question: "¿Qué es la contabilidad integrada en un ERP?",
      options: [
        { text: "Un módulo para editar videos.", correct: false },
        {
          text: "Un módulo que unifica todas las operaciones contables de una empresa.",
          correct: true,
        },
        { text: "Un software para diseñar gráficos.", correct: false },
      ],
    },
    {
      question: "¿Qué es la escalabilidad en un sistema ERP-CRM?",
      options: [
        {
          text: "La capacidad del sistema para integrarse con otros sistemas.",
          correct: false,
        },
        {
          text: "La capacidad del sistema para manejar un crecimiento en el volumen de trabajo o usuarios.",
          correct: true,
        },
        {
          text: "La capacidad del sistema para generar informes detallados.",
          correct: false,
        },
      ],
    },
    {
      question: "¿Qué es un almacén de datos en tiempo real?",
      options: [
        { text: "Un tipo de base de datos.", correct: false },
        {
          text: "Un almacén de datos que se actualiza continuamente a medida que los datos llegan.",
          correct: true,
        },
        {
          text: "Un almacén de datos que se actualiza periódicamente.",
          correct: false,
        },
      ],
    },
    {
      question: "¿Qué es la integración de sistemas en el contexto de ERP-CRM?",
      options: [
        { text: "La instalación de hardware adicional.", correct: false },
        { text: "La creación de gráficos para informes.", correct: false },
        {
          text: "La conexión y comunicación entre diferentes sistemas y aplicaciones de software.",
          correct: true,
        },
      ],
    },
    {
      question: "¿Odoo permite crear nuevos módulos?:",
      options: [
        {
          text: "Si, descargando el proyecto completo desde GIT.",
          correct: false,
        },
        { text: "Si, usando el comando odoo-bin.", correct: true },
        { text: "No, solo se pueden usar los oficiales.", correct: false },
      ],
    },
    {
      question: "¿Con que comando imprimimos líneas por consola en Python?:",
      options: [
        { text: "print()", correct: true },
        { text: "echo()", correct: false },
        { text: "PrintLn()", correct: false },
      ],
    },
    {
      question:
        "¿Cuándo utilizo Python cuál es el símbolo de carácter flotante dentro de la definición de un parámetro?:",
      options: [
        { text: "%g.", correct: false },
        { text: "%i.", correct: false },
        { text: "%f.", correct: true },
      ],
    },
    {
      question: "¿Qué tipo de lenguaje es Python?:",
      options: [
        { text: "Virtualizado.", correct: false },
        { text: "Interpretado.", correct: true },
        { text: "Compilado.", correct: false },
      ],
    },
    {
      question:
        "¿Qué es un componente en el contexto del desarrollo de software?",
      options: [
        { text: "Un tipo de base de datos.", correct: false },
        { text: "Una pieza de hardware.", correct: false },
        {
          text: "Una unidad modular de código que tiene una función específica dentro de una aplicación.",
          correct: true,
        },
      ],
    },
    {
      question:
        "El plugin que se instala en Chrome para realizar un debug a través de navegador se denomina:",
      options: [
        { text: "Odoo Chrome.", correct: false },
        { text: "Debug Chrome.", correct: false },
        { text: "Odoo Debug.", correct: true },
      ],
    },
    {
      question:
        "¿Cuál de los siguientes es un beneficio de utilizar componentes reutilizables en el desarrollo de software?",
      options: [
        {
          text: "Mejora la eficiencia y reduce el tiempo de desarrollo.",
          correct: true,
        },
        { text: "Requiere más espacio en disco.", correct: false },
        { text: "Aumenta el tiempo de desarrollo.", correct: false },
      ],
    },
    {
      question: "¿En qué consiste depurar un programa?:",
      options: [
        {
          text: "Hacer más legible el código para otros programadores.",
          correct: false,
        },
        {
          text: "Redimensionar el proyecto eliminando código redundante.",
          correct: false,
        },
        {
          text: "Encontrar y corregir los problemas que pueda tener el código del mismo.",
          correct: true,
        },
      ],
    },
    {
      question:
        "¿En qué directorio se almacena las diferentes vistas de un módulo?:",
      options: [
        { text: "models.", correct: false },
        { text: "directorio raíz.", correct: false },
        { text: "directorio raíz. views.", correct: true },
      ],
    },
    {
      question:
        "¿Para poder usar el menú técnico de Odoo que debemos hacer antes?:",
      options: [
        { text: "Pausar la base de datos.", correct: false },
        { text: "Activar el modo desarrollador.", correct: true },
        { text: "Entrar como usuario root.", correct: false },
      ],
    },
    {
      question: "¿Qué módulo de Odoo permite crear y gestionar un sitio web?",
      options: [
        { text: "Website.", correct: true },
        { text: "CRM.", correct: false },
        { text: "Sales.", correct: false },
      ],
    },
    {
      question:
        "¿Cuál de las siguientes opciones describe mejor la funcionalidad de Odoo?",
      options: [
        { text: "Un editor de texto.", correct: false },
        { text: "Un navegador web.", correct: false },
        {
          text: "Un software para la gestión empresarial que integra diferentes aplicaciones.",
          correct: true,
        },
      ],
    },
    {
      question: "¿Con que programa podemos acceder a Odoo?:",
      options: [
        { text: "Desde cualquier navegador web actual.", correct: true },
        { text: "Desde la consola del sistema.", correct: false },
        { text: "Desde el cliente oficial.", correct: false },
      ],
    },
    {
      question: "¿Qué es la normalización en bases de datos?",
      options: [
        {
          text: "Proceso de duplicar datos para mejorar el acceso.",
          correct: false,
        },
        { text: "Proceso de desfragmentar el disco duro.", correct: false },
        {
          text: "Proceso de estructurar una base de datos para reducir redundancias.",
          correct: true,
        },
      ],
    },
    {
      question:
        '¿Qué es la "capacidad de respuesta" en el contexto de ERP-CRM?',
      options: [
        {
          text: "La capacidad del sistema para adaptarse a las necesidades cambiantes del negocio.",
          correct: true,
        },
        {
          text: "La velocidad a la que el sistema puede procesar datos.",
          correct: false,
        },
        {
          text: "La capacidad del sistema para proporcionar soporte al cliente.",
          correct: false,
        },
      ],
    },
    {
      question:
        "¿Qué tabla contiene información principal del producto con Odoo?:",
      options: [
        { text: "res_parther.", correct: false },
        { text: "product_supplierinfo.", correct: false },
        { text: "product_template.", correct: true },
      ],
    },
    {
      question: '¿Qué es un "workflow" en un ERP?',
      options: [
        {
          text: "Un proceso automatizado que gestiona las tareas y los procesos de negocio.",
          correct: true,
        },
        { text: "Un tipo de base de datos.", correct: false },
        { text: "Un software para edición de videos.", correct: false },
      ],
    },
    {
      question: '¿Qué es un "data lake"?',
      options: [
        { text: "Un tipo de base de datos.", correct: false },
        {
          text: "Un repositorio centralizado que permite almacenar todos los datos estructurados y no estructurados a cualquier escala.",
          correct: true,
        },
        { text: "Un sistema de gestión de bases de datos.", correct: false },
      ],
    },
    {
      question: '¿Qué función tiene el módulo "Timesheet" en Odoo?',
      options: [
        {
          text: "Registrar y gestionar el tiempo trabajado por los empleados.",
          correct: true,
        },
        { text: "Gestionar inventarios.", correct: false },
        { text: "Realizar análisis financieros.", correct: false },
      ],
    },
    {
      question: "¿Qué es un Data Warehouse?",
      options: [
        { text: "Un tipo de disco duro.", correct: false },
        {
          text: "Un sistema para el almacenamiento y análisis de grandes volúmenes de datos.",
          correct: true,
        },
        { text: "Un almacén físico de datos.", correct: false },
      ],
    },
    {
      question:
        "El estado de desarrollo de necesidades de un software de gestión empresarial se puede considerar:",
      options: [
        {
          text: "Un proceso vivo que evoluciona con las necesidades de la empresa.",
          correct: true,
        },
        {
          text: "Un proceso estático que finaliza con la implantación.",
          correct: false,
        },
        {
          text: "Un proceso standard que nos sirve para cualquier empresa y sector.",
          correct: false,
        },
      ],
    },
    {
      question: "¿El menú técnico de Odoo está activo desde el principio?:",
      options: [
        { text: "Solo si se activa en la instalación", correct: false },
        { text: "No", correct: true },
        { text: "Si, siempre lo está", correct: false },
      ],
    },
  ],
  acceso_datos: [
    {
      question:
        "¿Qué lenguaje es utilizado para realizar consultas en bases de datos orientadas a objetos?",
      options: [
        { text: "OQL", correct: true },
        { text: "SQL", correct: false },
        { text: "JPQL", correct: false },
      ],
    },
    {
      question:
        "¿Qué ventaja clave tienen las BDOO en aplicaciones con manejo intensivo de objetos?",
      options: [
        { text: "Escalabilidad", correct: false },
        { text: "Reducción de mapeos complejos", correct: true },
        { text: "Compatibilidad universal", correct: false },
      ],
    },
    {
      question:
        "¿Qué herramienta facilita la conexión entre Java y bases de datos?",
      options: [
        { text: "JDBC", correct: true },
        { text: "ObjectDB", correct: false },
        { text: "PostgreSQL", correct: false },
      ],
    },
    {
      question:
        "¿Qué ventaja tienen las BDOO en el manejo de estructuras de datos complejas?",
      options: [
        { text: "Reducen el uso de memoria", correct: false },
        { text: "Almacenan datos de manera nativa", correct: true },
        {
          text: "Simplifican los datos a modelos relacionales",
          correct: false,
        },
      ],
    },
    {
      question:
        "¿Qué ventaja tiene usar tipos de datos definidos por el usuario?",
      options: [
        { text: "Simplifican las consultas básicas", correct: false },
        { text: "Representan mejor la lógica del negocio", correct: true },
        { text: "Aumentan la compatibilidad hacia atrás", correct: false },
      ],
    },
    {
      question:
        "¿Qué propiedad permite que las transacciones cumplan con las propiedades ACID?",
      options: [
        { text: "Commit", correct: false },
        { text: "Encapsulamiento", correct: false },
        { text: "Atomicidad", correct: true },
      ],
    },
    {
      question:
        "¿Qué modelo de base de datos minimiza el desfase objeto-relacional?",
      options: [
        { text: "Relacional", correct: false },
        { text: "Jerárquico", correct: false },
        { text: "Objeto-relacional", correct: true },
      ],
    },
    {
      question:
        "¿Qué característica permite la reutilización de código en las BDOO?",
      options: [
        { text: "Sobrecarga de operadores", correct: true },
        { text: "Encapsulamiento", correct: false },
        { text: "Compatibilidad con lenguajes relacionales", correct: false },
      ],
    },
    {
      question:
        "¿Qué elemento gestiona las consultas en aplicaciones basadas en JPA?",
      options: [
        { text: "EntityManager", correct: true },
        { text: "TransactionManager", correct: false },
        { text: "SessionFactory", correct: false },
      ],
    },
    {
      question: "¿Qué permite la herencia entre tablas en PostgreSQL?",
      options: [
        { text: "Crear índices automáticamente", correct: false },
        { text: "Evitar duplicados", correct: false },
        { text: "Reutilizar estructuras", correct: true },
      ],
    },
    {
      question: "¿Qué tipo de dato se usa para almacenar videos en SQL99?",
      options: [
        { text: "Enum", correct: false },
        { text: "BLOB", correct: true },
        { text: "CLOB", correct: false },
      ],
    },
    {
      question: "¿Qué define el estándar ANSI SQL?",
      options: [
        { text: "Compatibilidad universal en SQL", correct: true },
        { text: "Restricción de funciones avanzadas", correct: false },
        { text: "Exclusividad en sistemas propietarios", correct: false },
      ],
    },
    {
      question:
        "¿Qué sistema gestor soporta juegos de caracteres internacionales?",
      options: [
        { text: "Oracle", correct: false },
        { text: "PostgreSQL", correct: true },
        { text: "SQL Server", correct: false },
      ],
    },
    {
      question:
        "¿Qué característica principal distingue a las bases de datos objeto-relacionales?",
      options: [
        { text: "Permiten tipos de datos personalizados", correct: true },
        { text: "Solo se usan con lenguajes de bajo nivel", correct: false },
        { text: "Solo soportan tipos atómicos", correct: false },
      ],
    },
    {
      question: "¿Qué función cumple la instrucción db:open en XQuery?",
      options: [
        { text: "Crear bases de datos", correct: false },
        { text: "Ejecutar consultas XQuery", correct: false },
        { text: "Abrir un documento XML", correct: true },
      ],
    },
    {
      question: "¿Qué ventaja tiene XQuery sobre SQL en bases de datos XML?",
      options: [
        { text: "No necesita sintaxis compleja", correct: false },
        {
          text: "Permite manipulación estructurada de datos XML",
          correct: true,
        },
        { text: "Es más rápido", correct: false },
      ],
    },
    {
      question: "¿Qué método se usa para renombrar un documento en BaseX?",
      options: [
        { text: "Update", correct: false },
        { text: "Rename", correct: true },
        { text: "Modify", correct: false },
      ],
    },
    {
      question:
        "¿Qué componente en BaseX permite trabajar con bases de datos de forma local?",
      options: [
        { text: "Context", correct: true },
        { text: "LocalSession", correct: false },
        { text: "BaseXCore", correct: false },
      ],
    },
    {
      question: "¿Qué ventaja tiene el uso de índices en bases de datos XML?",
      options: [
        { text: "Mejora la compresión", correct: false },
        { text: "Acelera las consultas", correct: true },
        { text: "Reduce el tamaño de los documentos", correct: false },
      ],
    },
    {
      question: "¿Qué ventaja principal tiene una base de datos nativa XML?",
      options: [
        { text: "Es más rápida que las bases relacionales", correct: false },
        { text: "Soporta grandes volúmenes de datos", correct: false },
        { text: "Preserva el formato original del documento", correct: true },
      ],
    },
    {
      question: "¿Qué lenguaje de consulta se utiliza en bases de datos XML?",
      options: [
        { text: "XQuery", correct: true },
        { text: "SQL", correct: false },
        { text: "OQL", correct: false },
      ],
    },
    {
      question: "¿Qué ventaja ofrece BaseX como gestor de bases de datos XML?",
      options: [
        { text: "Soporte multiplataforma", correct: true },
        { text: "Alta complejidad de uso", correct: false },
        { text: "Baja compatibilidad con Java", correct: false },
      ],
    },
    {
      question:
        "¿Qué elemento de XQJ permite gestionar conexiones con bases de datos XML?",
      options: [
        { text: "XQPreparedExpression", correct: false },
        { text: "XQDataSource", correct: true },
        { text: "XQConnection", correct: false },
      ],
    },
    {
      question:
        "¿Qué comando permite optimizar el rendimiento de una base de datos en BaseX?",
      options: [
        { text: "Adjust", correct: false },
        { text: "Tune", correct: false },
        { text: "Optimize", correct: true },
      ],
    },
    {
      question: "¿Qué base de datos XML nativa es opensource?",
      options: [
        { text: "BaseX", correct: true },
        { text: "DB2", correct: false },
        { text: "Oracle XML DB", correct: false },
      ],
    },
    {
      question:
        "¿Qué clase en BaseX se usa para ejecutar comandos directamente sobre la base de datos?",
      options: [
        { text: "Context", correct: false },
        { text: "Command", correct: true },
        { text: "BaseXCommand", correct: false },
      ],
    },
    {
      question: "¿Qué comando en BaseX permite eliminar una base de datos?",
      options: [
        { text: "DropDB", correct: true },
        { text: "RemoveDB", correct: false },
        { text: "DeleteDB", correct: false },
      ],
    },
    {
      question: "¿Qué prueba determina la carga máxima que soporta el sistema?",
      options: [
        { text: "Pruebas de volumen", correct: true },
        { text: "Pruebas de estrés", correct: false },
        { text: "Pruebas de recuperación", correct: false },
      ],
    },
    {
      question:
        "¿Qué ventaja tiene el uso de JavaBeans en programación orientada a componentes?",
      options: [
        { text: "Eliminación de la necesidad de pruebas", correct: false },
        { text: "Automatización completa de la codificación", correct: false },
        { text: "Portabilidad entre plataformas", correct: true },
      ],
    },
    {
      question: "¿Qué define una propiedad restringida en un componente?",
      options: [
        {
          text: "Los cambios pueden ser vetados por otros componentes",
          correct: true,
        },
        {
          text: "Solo se puede acceder mediante introspección",
          correct: false,
        },
        {
          text: "No puede cambiar su valor después de ser inicializada",
          correct: false,
        },
      ],
    },
    {
      question:
        "¿Qué prueba se realiza para validar la integridad de los datos tras un fallo?",
      options: [
        { text: "Pruebas de estrés", correct: false },
        { text: "Pruebas de volumen", correct: false },
        { text: "Pruebas de recuperación", correct: true },
      ],
    },
    {
      question:
        "¿Qué herramienta permite gestionar cambios de propiedades en un JavaBean?",
      options: [
        { text: "ChangePropertyManager", correct: false },
        { text: "PropertyChangeSupport", correct: true },
        { text: "PropertyEventManager", correct: false },
      ],
    },
    {
      question: "¿Qué interfaz en Java permite vetar cambios en propiedades?",
      options: [
        { text: "VetoableChangeSupport", correct: false },
        { text: "VetoableChangeListener", correct: true },
        { text: "PropertyVetoListener", correct: false },
      ],
    },
    {
      question:
        "¿Qué ventaja ofrece la serialización en Java para componentes reutilizables?",
      options: [
        {
          text: "Reduce el uso de memoria durante la ejecución",
          correct: false,
        },
        { text: "Incrementa la velocidad de ejecución", correct: false },
        {
          text: "Permite guardar y restaurar el estado del componente",
          correct: true,
        },
      ],
    },
    {
      question:
        "¿Qué tipo de prueba asegura que los cambios en una parte del software no afecten otras partes?",
      options: [
        { text: "Pruebas de regresión", correct: true },
        { text: "Pruebas de validación", correct: false },
        { text: "Pruebas de integración", correct: false },
      ],
    },
    {
      question: "¿Qué herramienta se usa para empaquetar componentes en Java?",
      options: [
        { text: "Maven", correct: false },
        { text: "NetBeans", correct: false },
        { text: "Archivos JAR", correct: true },
      ],
    },
    {
      question:
        "¿Qué mecanismo asegura la compatibilidad entre versiones de componentes?",
      options: [
        { text: "Serialización", correct: false },
        { text: "Estándares de interoperabilidad", correct: true },
        { text: "Empaquetado modular", correct: false },
      ],
    },
    {
      question:
        "¿Qué tipo de prueba evalúa la resistencia del sistema bajo condiciones extremas de sobrecarga?",
      options: [
        { text: "Pruebas de volumen", correct: false },
        { text: "Pruebas de estrés", correct: true },
        { text: "Pruebas de recuperación", correct: false },
      ],
    },
    {
      question:
        "¿Cuál es una ventaja principal de la programación orientada a componentes?",
      options: [
        { text: "Facilita la encapsulación de datos", correct: false },
        { text: "Incrementa la complejidad del desarrollo", correct: false },
        { text: "Permite reutilizar componentes probados", correct: true },
      ],
    },
    {
      question:
        "¿Qué elemento es fundamental para garantizar la calidad del software?",
      options: [
        { text: "Uso de componentes reutilizables", correct: false },
        { text: "Realización de pruebas rigurosas", correct: true },
        { text: "Empaquetado eficiente", correct: false },
      ],
    },
    {
      question:
        "¿Qué ventaja tiene PostgreSQL en la administración de bases de datos?",
      options: [
        { text: "Es propietario", correct: false },
        { text: "Permite replicación de datos", correct: true },
        { text: "Soporta pocos tipos de datos", correct: false },
      ],
    },
    {
      question:
        "¿Qué sistema gestor de base de datos soporta herencia entre tablas?",
      options: [
        { text: "MySQL", correct: false },
        { text: "SQL Server", correct: false },
        { text: "PostgreSQL", correct: true },
      ],
    },
    {
      question:
        "¿Qué herramienta de JPA se utiliza para gestionar el ciclo de vida de las entidades?",
      options: [
        { text: "TransactionHandler", correct: false },
        { text: "EntityManager", correct: true },
        { text: "Hibernate", correct: false },
      ],
    },
    {
      question:
        "¿Qué estándar asegura la coherencia del lenguaje SQL entre sistemas?",
      options: [
        { text: "OQL", correct: false },
        { text: "ANSI SQL", correct: true },
        { text: "JDBC", correct: false },
      ],
    },
    {
      question: "¿Qué tipo de datos permite almacenar colecciones ordenadas?",
      options: [
        { text: "Bag", correct: false },
        { text: "Array", correct: true },
        { text: "Set", correct: false },
      ],
    },
    {
      question:
        "¿Qué herramienta gráfica facilita la administración de PostgreSQL?",
      options: [
        { text: "pgAdmin", correct: true },
        { text: "SQL Server Management Studio", correct: false },
        { text: "MySQL Workbench", correct: false },
      ],
    },
    {
      question:
        "¿Qué API estándar facilita la persistencia en aplicaciones Java?",
      options: [
        { text: "JPA", correct: true },
        { text: "Hibernate", correct: false },
        { text: "JDBC", correct: false },
      ],
    },
    {
      question:
        "¿Qué método en JPA asegura las propiedades ACID al finalizar una transacción?",
      options: [
        { text: "commit", correct: true },
        { text: "rollback", correct: false },
        { text: "close", correct: false },
      ],
    },
    {
      question:
        "¿Qué operación en JPA se utiliza para actualizar una entidad en la base de datos?",
      options: [
        { text: "remove", correct: false },
        { text: "merge", correct: true },
        { text: "persist", correct: false },
      ],
    },
    {
      question:
        "¿Qué permite el uso de arrays en bases de datos objeto-relacionales?",
      options: [
        { text: "Crear vistas complejas", correct: false },
        { text: "Almacenar colecciones ordenadas", correct: true },
        { text: "Reducir espacio de almacenamiento", correct: false },
      ],
    },
    {
      question: "¿Qué función cumple la interfaz XQExpression en XQJ?",
      options: [
        { text: "Crear conexiones", correct: false },
        { text: "Ejecutar consultas inmediatas", correct: true },
        { text: "Configurar el contexto de consultas", correct: false },
      ],
    },
    {
      question: "¿Qué comando en BaseX cierra una base de datos abierta?",
      options: [
        { text: "ShutDown", correct: false },
        { text: "Exit", correct: false },
        { text: "Close", correct: true },
      ],
    },
    {
      question:
        "¿Qué clase en BaseX permite ejecutar comandos directamente en el contexto local?",
      options: [
        { text: "BaseXCommand", correct: false },
        { text: "Context", correct: false },
        { text: "Command", correct: true },
      ],
    },
    {
      question:
        "¿Qué permite realizar el uso de índices en bases de datos XML?",
      options: [
        { text: "Reducir el tamaño de los documentos", correct: false },
        { text: "Realizar consultas más rápidas", correct: true },
        { text: "Evitar duplicados en documentos", correct: false },
      ],
    },
    {
      question: "¿Qué es una colección en una base de datos XML?",
      options: [
        { text: "Un conjunto de nodos", correct: false },
        { text: "Una tabla de datos", correct: false },
        { text: "Un agrupamiento de documentos XML", correct: true },
      ],
    },
    {
      question:
        "¿Qué API estándar de Java permite trabajar con bases de datos XML?",
      options: [
        { text: "JPA", correct: false },
        { text: "XQJ", correct: true },
        { text: "JDBC", correct: false },
      ],
    },
    {
      question:
        "¿Qué clase en BaseX permite gestionar conexiones con bases de datos?",
      options: [
        { text: "Context", correct: true },
        { text: "BaseXConnection", correct: false },
        { text: "Session", correct: false },
      ],
    },
    {
      question:
        "¿Qué propiedad de XQuery permite construir nuevos documentos XML?",
      options: [
        { text: "Expresiones FLWOR", correct: true },
        { text: "XPath", correct: false },
        { text: "Contextos estáticos", correct: false },
      ],
    },
    {
      question: "¿Qué comando de BaseX renombra un documento en una colección?",
      options: [
        { text: "Update", correct: false },
        { text: "ChangeName", correct: false },
        { text: "Rename", correct: true },
      ],
    },
    {
      question:
        "¿Qué propiedad permite la ejecución de comandos parametrizados en XQJ?",
      options: [
        { text: "Reutilización de plantillas", correct: true },
        { text: "Flexibilidad en consultas", correct: false },
        { text: "Soporte para XQuery", correct: false },
      ],
    },
    {
      question:
        "¿Qué lenguaje utiliza BaseX para realizar consultas en sus bases de datos?",
      options: [
        { text: "OQL", correct: false },
        { text: "XQuery", correct: true },
        { text: "SQL", correct: false },
      ],
    },
    {
      question:
        "¿Qué método se usa para notificar un cambio en una propiedad ligada?",
      options: [
        { text: "addPropertyListener", correct: false },
        { text: "setPropertyChange", correct: false },
        { text: "firePropertyChange", correct: true },
      ],
    },
    {
      question: "¿Qué es la introspección en el contexto de los componentes?",
      options: [
        {
          text: "Modificar un componente durante su ejecución",
          correct: false,
        },
        {
          text: "Obtener información de un componente sin ejecutarlo",
          correct: true,
        },
        {
          text: "Serializar un componente para su transferencia",
          correct: false,
        },
      ],
    },
    {
      question:
        "¿Qué ventaja tiene la programación orientada a componentes respecto a pruebas?",
      options: [
        {
          text: "Facilita la depuración en tiempo de ejecución",
          correct: false,
        },
        { text: "Evita la necesidad de documentación técnica", correct: false },
        {
          text: "Los componentes pueden probarse de forma individual",
          correct: true,
        },
      ],
    },
    {
      question:
        "¿Qué ventaja ofrece el empaquetado de componentes en archivos .jar?",
      options: [
        {
          text: "Incrementa la velocidad de ejecución de la aplicación",
          correct: false,
        },
        { text: "Reduce el tamaño del archivo ejecutable", correct: false },
        {
          text: "Permite agrupar dependencias y facilitar la distribución",
          correct: true,
        },
      ],
    },
    {
      question:
        "¿Qué método se utiliza para notificar un cambio en una propiedad restringida?",
      options: [
        { text: "notifyRestrictedChange", correct: false },
        { text: "fireVetoableChange", correct: true },
        { text: "setRestrictedProperty", correct: false },
      ],
    },
    {
      question: "¿Qué herramienta es ideal para desarrollar componentes Java?",
      options: [
        { text: "Todas son correctas", correct: true },
        { text: "Eclipse", correct: false },
        { text: "NetBeans", correct: false },
      ],
    },
    {
      question: "¿Qué permite la serialización en Java?",
      options: [
        {
          text: "Aumentar la velocidad de ejecución de un programa",
          correct: false,
        },
        {
          text: "Convertir un objeto en una secuencia de bytes",
          correct: true,
        },
        {
          text: "Ejecutar un componente de manera asincrónica",
          correct: false,
        },
      ],
    },
    {
      question: "¿Qué ventaja tiene el uso de eventos en componentes?",
      options: [
        { text: "Permite reducir el tamaño del código fuente", correct: false },
        { text: "Facilita la comunicación entre componentes", correct: true },
        {
          text: "Mejora la interoperabilidad entre plataformas",
          correct: false,
        },
      ],
    },
    {
      question:
        "¿Qué método es obligatorio implementar para que un objeto Java pueda ser serializado?",
      options: [
        { text: "writeObject", correct: false },
        { text: "Implementar la interfaz Serializable", correct: true },
        { text: "toString", correct: false },
      ],
    },
    {
      question:
        "¿Qué método se utiliza para obtener el valor de una propiedad simple en un JavaBean?",
      options: [
        { text: "retrieve<Property>", correct: false },
        { text: "get<Property>", correct: true },
        { text: "access<Property>", correct: false },
      ],
    },
    {
      question:
        "¿Qué elemento define la estructura de una BDOO según el estándar ODMG?",
      options: [
        { text: "Lenguaje de definición de objetos (ODL)", correct: true },
        { text: "Clases UML", correct: false },
        { text: "Lenguaje de consultas SQL", correct: false },
      ],
    },
    {
      question: "¿Qué sistema de gestión es multiplataforma y soporta Unicode?",
      options: [
        { text: "MySQL", correct: false },
        { text: "PostgreSQL", correct: true },
        { text: "Oracle", correct: false },
      ],
    },
    {
      question:
        "¿Qué característica permite a PostgreSQL manejar datos concurrentes sin bloqueos?",
      options: [
        { text: "Copias de seguridad en caliente", correct: false },
        { text: "Replicación de datos", correct: false },
        { text: "MVCC", correct: true },
      ],
    },
    {
      question:
        "¿Qué característica de las BDOO elimina el desfase objeto-relacional?",
      options: [
        { text: "Almacenamiento como tablas", correct: false },
        { text: "Persistencia de objetos sin transformación", correct: true },
        { text: "Uso de SQL estándar", correct: false },
      ],
    },
    {
      question: "¿Qué permite la herramienta Hibernate en Java?",
      options: [
        { text: "Simplificar la persistencia de datos", correct: true },
        { text: "Crear índices automáticos", correct: false },
        { text: "Crear triggers complejos", correct: false },
      ],
    },
    {
      question:
        "¿Qué lenguaje se utiliza para interactuar con bases de datos relacionales?",
      options: [
        { text: "Java", correct: false },
        { text: "SQL", correct: true },
        { text: "HTML", correct: false },
      ],
    },
    {
      question: "¿Qué ventaja principal tienen las BDOO frente a las BDOR?",
      options: [
        { text: "Escalabilidad", correct: false },
        { text: "Compatibilidad con SQL estándar", correct: false },
        {
          text: "Correspondencia directa con el modelo de objetos",
          correct: true,
        },
      ],
    },
    {
      question:
        "¿Qué característica define una base de datos objeto-relacional?",
      options: [
        { text: "Solo soporta tipos atómicos", correct: false },
        { text: "Usa exclusivamente tablas", correct: false },
        { text: "Integra objetos y tablas", correct: true },
      ],
    },
    {
      question:
        "¿Qué método en BaseX permite agregar documentos a una colección?",
      options: [
        { text: "Attach", correct: false },
        { text: "Insert", correct: false },
        { text: "Add", correct: true },
      ],
    },
    {
      question:
        "¿Qué función permite almacenar objetos serializados en bases de datos XML?",
      options: [
        { text: "Guardar atributos", correct: false },
        { text: "Guardar como binarios", correct: true },
        { text: "Representar como nodos", correct: false },
      ],
    },
    {
      question:
        "¿Qué unidad mínima se almacena en las bases de datos XML nativas?",
      options: [
        { text: "Documento", correct: true },
        { text: "Nodo", correct: false },
        { text: "Colección", correct: false },
      ],
    },
    {
      question:
        "¿Qué tipo de almacenamiento es más recomendado para documentos XML?",
      options: [
        { text: "En base de datos XML", correct: true },
        { text: "En fichero", correct: false },
        { text: "En base de datos relacional", correct: false },
      ],
    },
    {
      question:
        "¿Qué identifica de forma única un documento en una base de datos XML?",
      options: [
        { text: "Nombre del nodo raíz", correct: false },
        { text: "Clave primaria", correct: false },
        { text: "Identificador único", correct: true },
      ],
    },
    {
      question:
        "¿Qué comando en BaseX permite eliminar una base de datos completa?",
      options: [
        { text: "DeleteDB", correct: false },
        { text: "DropDB", correct: true },
        { text: "RemoveDB", correct: false },
      ],
    },
    {
      question:
        "¿Qué elemento debe implementar un componente Java para ser persistente?",
      options: [
        { text: "La interfaz Serializable", correct: true },
        { text: "Una clase BeanInfo", correct: false },
        { text: "Un constructor público", correct: false },
      ],
    },
    {
      question:
        "¿Qué interfaz en JavaBeans permite manejar eventos generados por propiedades?",
      options: [
        { text: "EventListener", correct: false },
        { text: "PropertyChangeListener", correct: true },
        { text: "Serializable", correct: false },
      ],
    },
    {
      question:
        "¿Qué permite el uso de introspección en entornos de desarrollo?",
      options: [
        { text: "Ejecutar componentes automáticamente", correct: false },
        { text: "Modificar clases en tiempo de compilación", correct: false },
        {
          text: "Obtener información sobre métodos y propiedades sin ejecutar el código",
          correct: true,
        },
      ],
    },
    {
      question:
        "¿Qué interfaz en Java permite que un componente sea persistente?",
      options: [
        { text: "Comparable", correct: false },
        { text: "Serializable", correct: true },
        { text: "Runnable", correct: false },
      ],
    },
    {
      question:
        "¿Qué característica define una propiedad restringida en JavaBeans?",
      options: [
        { text: "Puede tener múltiples valores asociados", correct: false },
        {
          text: "Permite vetar cambios mediante VetoableChangeListener",
          correct: true,
        },
        {
          text: "Notifica cambios a otros componentes automáticamente",
          correct: false,
        },
      ],
    },
    {
      question:
        "¿Qué prueba asegura que los cambios no afecten a otras partes del sistema?",
      options: [
        { text: "Prueba de integración", correct: false },
        { text: "Prueba de regresión", correct: true },
        { text: "Prueba de validación", correct: false },
      ],
    },
    {
      question:
        "¿Qué componente actúa como fuente de eventos en programación orientada a componentes?",
      options: [
        { text: "Listener", correct: false },
        { text: "EventObject", correct: false },
        { text: "Source", correct: true },
      ],
    },
    {
      question:
        "¿Qué tipo de propiedad puede tener valores múltiples asociados en JavaBeans?",
      options: [
        { text: "Simple", correct: false },
        { text: "Indexada", correct: true },
        { text: "Ligada", correct: false },
      ],
    },
    {
      question: "¿Qué componente actúa como oyente en el patrón de eventos?",
      options: [
        { text: "Listener", correct: true },
        { text: "BeanInfo", correct: false },
        { text: "EventSource", correct: false },
      ],
    },
    {
      question: "¿Qué ventaja aporta el estándar SQL:1999?",
      options: [
        { text: "Menor soporte de tipos de datos", correct: false },
        {
          text: "Integración con lenguajes orientados a objetos",
          correct: true,
        },
        { text: "Exclusividad para bases relacionales", correct: false },
      ],
    },
    {
      question: "¿Qué ventaja tiene PostgreSQL frente a MySQL?",
      options: [
        { text: "Menor consumo de recursos", correct: false },
        { text: "Simplificación de comandos", correct: false },
        { text: "Mayor soporte de transacciones complejas", correct: true },
      ],
    },
    {
      question: "¿Qué permite la creación de métodos en SQL:1999?",
      options: [
        { text: "Definir índices", correct: false },
        { text: "Crear claves primarias", correct: false },
        { text: "Operar con objetos complejos", correct: true },
      ],
    },
    {
      question:
        "¿Qué tipo de datos se usa para almacenar fechas en una BD objeto-relacional?",
      options: [
        { text: "String", correct: false },
        { text: "Date", correct: true },
        { text: "Enum", correct: false },
      ],
    },
    {
      question: "¿Qué tipo de dato permite almacenar texto extenso en SQL99?",
      options: [
        { text: "CLOB", correct: true },
        { text: "ENUM", correct: false },
        { text: "BOOLEAN", correct: false },
      ],
    },
    {
      question:
        "¿Qué ventaja tienen las bases de datos objeto-relacionales frente a las relacionales?",
      options: [
        { text: "Mayor compatibilidad", correct: false },
        { text: "Manejo de datos complejos", correct: true },
        { text: "Menor flexibilidad", correct: false },
      ],
    },
    {
      question:
        "¿Qué estructura básica organiza los datos en una base de datos XML?",
      options: [
        { text: "Nodo", correct: false },
        { text: "Árbol", correct: true },
        { text: "Colección", correct: false },
      ],
    },
    {
      question:
        "¿Qué comando de BaseX se utiliza para añadir un documento XML a una base de datos?",
      options: [
        { text: "Add", correct: true },
        { text: "Attach", correct: false },
        { text: "Insert", correct: false },
      ],
    },
    {
      question: "¿Qué tipo de excepciones maneja BaseX en sus aplicaciones?",
      options: [
        { text: "BaseXException", correct: true },
        { text: "IOException", correct: false },
        { text: "SQLException", correct: false },
      ],
    },
    {
      question: "¿Qué clase en BaseX se usa para realizar consultas XQuery?",
      options: [
        { text: "Query", correct: false },
        { text: "XQuery", correct: true },
        { text: "QueryExecutor", correct: false },
      ],
    },
    {
      question: "¿Qué característica tienen las bases de datos XML-enabled?",
      options: [
        { text: "Requieren esquemas rígidos", correct: false },
        { text: "Necesitan un mapeo intermedio", correct: true },
        { text: "Almacenan documentos XML de forma nativa", correct: false },
      ],
    },
    {
      question:
        "¿Qué diferencia a una base de datos XML-enabled de una nativa?",
      options: [
        { text: "La XML-enabled necesita mapeo previo", correct: true },
        { text: "La XML-enabled soporta más formatos", correct: false },
        { text: "La XML-enabled es más eficiente", correct: false },
      ],
    },
    {
      question:
        "¿Qué elemento de XQJ representa una secuencia de resultados de una consulta?",
      options: [
        { text: "XQResultSet", correct: false },
        { text: "XQResultSequence", correct: true },
        { text: "XQSequence", correct: false },
      ],
    },
    {
      question: "¿Qué lenguaje de marcas utiliza las bases de datos XML?",
      options: [
        { text: "HTML", correct: false },
        { text: "SGML", correct: false },
        { text: "XML", correct: true },
      ],
    },
    {
      question:
        "¿Qué ventaja tiene el empaquetado de componentes en un archivo JAR?",
      options: [
        {
          text: "Facilita la distribución y reutilización de componentes",
          correct: true,
        },
        { text: "Reduce el tamaño del archivo ejecutable", correct: false },
        { text: "Incrementa la seguridad del código", correct: false },
      ],
    },
    {
      question:
        "¿Qué modelo de componentes permite la interoperabilidad entre lenguajes y plataformas?",
      options: [
        { text: "ActiveX", correct: false },
        { text: "CORBA", correct: true },
        { text: "JavaBeans", correct: false },
      ],
    },
    {
      question:
        "¿Qué mecanismo permite inspeccionar y modificar la estructura de una clase en tiempo de ejecución?",
      options: [
        { text: "Introspección", correct: false },
        { text: "Reflexión", correct: true },
        { text: "Serialización", correct: false },
      ],
    },
    {
      question:
        "¿Qué estándar permite la comunicación entre componentes a través de eventos?",
      options: [
        { text: "JavaBeans", correct: true },
        { text: "COM", correct: false },
        { text: "CORBA", correct: false },
      ],
    },
    {
      question:
        "¿Qué herramienta permite inspeccionar dinámicamente métodos de una clase en Java?",
      options: [
        { text: "PropertyChangeListener", correct: false },
        { text: "Reflexión", correct: true },
        { text: "Introspección", correct: false },
      ],
    },
    {
      question:
        "¿Qué elemento asegura la consistencia en transacciones en bases de datos?",
      options: [
        { text: "Persistencia", correct: false },
        { text: "Propiedades ACID", correct: true },
        { text: "Lenguaje SQL estándar", correct: false },
      ],
    },
    {
      question:
        "¿Qué ventaja aporta ObjectDB frente a bases de datos relacionales?",
      options: [
        { text: "Completa integración con SQL", correct: false },
        { text: "Mayor velocidad de transacciones", correct: false },
        { text: "Evita el desfase objeto-relacional", correct: true },
      ],
    },
    {
      question:
        "¿Qué ventaja tiene PostgreSQL al trabajar con bases de datos relacionales?",
      options: [
        { text: "Baja escalabilidad", correct: false },
        { text: "Alta concurrencia", correct: true },
        { text: "Limitación de datos", correct: false },
      ],
    },
    {
      question: "¿Qué función tiene la interfaz API en una base de datos?",
      options: [
        { text: "Crear tablas", correct: false },
        { text: "Reducir tamaño de datos", correct: false },
        { text: "Facilitar la comunicación entre aplicaciones", correct: true },
      ],
    },
    {
      question:
        "¿Qué operación realiza JPA al almacenar una entidad en la base de datos?",
      options: [
        { text: "Remove", correct: false },
        { text: "Persist", correct: true },
        { text: "Merge", correct: false },
      ],
    },
    {
      question: "¿Qué permite crear PostgreSQL además de tablas tradicionales?",
      options: [
        { text: "Consultas jerárquicas", correct: false },
        { text: "Funciones no relacionales", correct: false },
        { text: "Tipos de datos personalizados", correct: true },
      ],
    },
    {
      question: "¿Qué comando en BaseX optimiza una base de datos?",
      options: [
        { text: "Optimize", correct: true },
        { text: "Tune", correct: false },
        { text: "Clean", correct: false },
      ],
    },
    {
      question: "¿Qué característica diferencia XQJ de JDBC?",
      options: [
        { text: "Permite manejar datos XML nativos", correct: true },
        { text: "No soporta conexiones transaccionales", correct: false },
        { text: "Está diseñado para SQL", correct: false },
      ],
    },
    {
      question:
        "¿Qué comando de BaseX se usa para listar todas las bases de datos disponibles?",
      options: [
        { text: "List", correct: true },
        { text: "ListDB", correct: false },
        { text: "ShowDB", correct: false },
      ],
    },
    {
      question:
        "¿Qué método se utiliza en Java para obtener el valor de una propiedad simple?",
      options: [
        { text: "set...()", correct: false },
        { text: "listen...()", correct: false },
        { text: "get...()", correct: true },
      ],
    },
    {
      question:
        "¿Qué ventaja tiene la documentación interna de un componente software?",
      options: [
        {
          text: "Garantiza que los usuarios finales puedan modificar el componente",
          correct: false,
        },
        {
          text: "Permite ejecutar el código más eficientemente",
          correct: false,
        },
        {
          text: "Facilita su integración en aplicaciones externas",
          correct: true,
        },
      ],
    },
    {
      question:
        "¿Qué herramienta de desarrollo es ideal para empaquetar componentes Java en archivos JAR?",
      options: [
        { text: "NetBeans", correct: true },
        { text: "Maven", correct: false },
        { text: "Eclipse", correct: false },
      ],
    },
    {
      question:
        "¿Qué paradigma permite la reutilización y mantenimiento del software mediante componentes?",
      options: [
        { text: "Programación funcional", correct: false },
        { text: "Programación orientada a componentes", correct: true },
        { text: "Programación orientada a objetos", correct: false },
      ],
    },
    {
      question:
        "¿Qué método de persistencia de JPA permite eliminar un objeto de la base de datos?",
      options: [
        { text: "merge", correct: false },
        { text: "persist", correct: false },
        { text: "remove", correct: true },
      ],
    },
    {
      question:
        "¿Qué lenguaje utiliza JPA para realizar consultas en bases de datos?",
      options: [
        { text: "OQL", correct: false },
        { text: "JPQL", correct: true },
        { text: "SQL:92", correct: false },
      ],
    },
    {
      question:
        "¿Qué protocolo utiliza JDBC para conectar Java con bases de datos?",
      options: [
        { text: "ODBC", correct: false },
        { text: "JDBC Driver", correct: true },
        { text: "HTTP", correct: false },
      ],
    },
    {
      question:
        "¿Qué tipo de dato se usa para almacenar imágenes en una base de datos?",
      options: [
        { text: "CLOB", correct: false },
        { text: "BLOB", correct: true },
        { text: "ARRAY", correct: false },
      ],
    },
    {
      question: "¿Qué desventaja tienen las bases de datos nativas XML?",
      options: [
        {
          text: "Pueden ser menos eficientes con grandes volúmenes de datos",
          correct: true,
        },
        { text: "No soportan lenguajes de consulta", correct: false },
        { text: "Requieren mapeo intermedio", correct: false },
      ],
    },
    {
      question:
        "¿Qué tipo de consultas se pueden realizar con XQPreparedExpression en XQJ?",
      options: [
        { text: "Consultas inmediatas", correct: false },
        { text: "Consultas no estructuradas", correct: false },
        { text: "Consultas paramétricas", correct: true },
      ],
    },
    {
      question:
        "¿Qué término se refiere a un atributo que afecta el comportamiento de un componente?",
      options: [
        { text: "Evento", correct: false },
        { text: "Persistencia", correct: false },
        { text: "Propiedad", correct: true },
      ],
    },
    {
      question:
        "¿Qué método se utiliza para agregar un oyente de eventos a un componente en JavaBeans?",
      options: [
        { text: "add<Evento>Listener", correct: true },
        { text: "registerEventListener", correct: false },
        { text: "attachListener", correct: false },
      ],
    },
    {
      question:
        "¿Qué método de la clase PropertyChangeSupport permite notificar cambios en una propiedad ligada?",
      options: [
        { text: "notifyPropertyChange", correct: false },
        { text: "addPropertyChangeListener", correct: false },
        { text: "firePropertyChange", correct: true },
      ],
    },
    {
      question:
        "¿Qué propiedad permite que un componente se pueda ensamblar dinámicamente?",
      options: [
        { text: "Introspección", correct: false },
        { text: "Persistencia", correct: false },
        { text: "Dinamismo", correct: true },
      ],
    },
    {
      question:
        "¿Qué mecanismo utiliza Java para convertir un objeto en una secuencia de bytes?",
      options: [
        { text: "Introspección", correct: false },
        { text: "Persistencia dinámica", correct: false },
        { text: "Serialización", correct: true },
      ],
    },
    {
      question:
        "¿Qué prueba evalúa si el software cumple los requisitos del cliente en su entorno real?",
      options: [
        { text: "Prueba de validación", correct: false },
        { text: "Prueba de aceptación", correct: true },
        { text: "Prueba de unidad", correct: false },
      ],
    },
    {
      question:
        "¿Qué comando se utiliza para crear una base de datos en PostgreSQL?",
      options: [
        { text: "CREATE DATABASE", correct: true },
        { text: "CREATE TABLE", correct: false },
        { text: "INSERT INTO", correct: false },
      ],
    },
    {
      question: "¿Qué tipo de consulta busca una entidad específica en JPA?",
      options: [
        { text: "Remove", correct: false },
        { text: "Persist", correct: false },
        { text: "Find", correct: true },
      ],
    },
    {
      question: "¿Qué herramienta gráfica se utiliza para administrar BaseX?",
      options: [
        { text: "pgAdmin", correct: false },
        { text: "BaseX Interface", correct: true },
        { text: "Admin Studio", correct: false },
      ],
    },
    {
      question:
        "¿Qué ventaja tiene el almacenamiento en una base de datos XML frente a ficheros?",
      options: [
        { text: "Menor coste de almacenamiento", correct: false },
        { text: "Mayor flexibilidad en consultas", correct: true },
        { text: "Menor complejidad de uso", correct: false },
      ],
    },
    {
      question: "¿Qué permite una base de datos nativa XML?",
      options: [
        { text: "Solo manejar datos estructurados", correct: false },
        { text: "Almacenar documentos como nodos", correct: true },
        { text: "Usar únicamente SQL", correct: false },
      ],
    },
    {
      question: "¿Qué lenguaje es un subconjunto de XQuery?",
      options: [
        { text: "JPQL", correct: false },
        { text: "SQL", correct: false },
        { text: "XPath", correct: true },
      ],
    },
    {
      question:
        "¿Qué propiedad permite que un componente informe a otros sobre cambios en su estado?",
      options: [
        { text: "Propiedad simple", correct: false },
        { text: "Propiedad ligada", correct: true },
        { text: "Propiedad indexada", correct: false },
      ],
    },
    {
      question: "¿Qué componente actúa como fuente de eventos en Java?",
      options: [
        { text: "BeanInfo", correct: false },
        { text: "Listener", correct: false },
        { text: "Source", correct: true },
      ],
    },
    {
      question: "¿Qué permite la reflexión en Java?",
      options: [
        { text: "Generar eventos automáticamente", correct: false },
        { text: "Modificar código fuente de clases", correct: false },
        {
          text: "Obtener información sobre clases y objetos en tiempo de ejecución",
          correct: true,
        },
      ],
    },
    {
      question: "¿Qué característica tienen las colecciones en eXist.db?",
      options: [
        { text: "No soportan sub-colecciones", correct: false },
        { text: "Son jerárquicas", correct: true },
        { text: "No permiten documentos binarios", correct: false },
      ],
    },
    {
      question: "¿Qué función cumple el comando CreateDB en BaseX?",
      options: [
        { text: "Crear una nueva base de datos", correct: true },
        { text: "Optimizar una base de datos existente", correct: false },
        { text: "Conectar a una base de datos remota", correct: false },
      ],
    },
    {
      question: "¿Qué comando permite ejecutar consultas XQuery en BaseX?",
      options: [
        { text: "XQuery", correct: true },
        { text: "RunQuery", correct: false },
        { text: "ExecuteQuery", correct: false },
      ],
    },
  ],
  desarrollo_interfaces: [
    {
      question:
        "¿Qué clase de JasperReports Library se utiliza para exportar un informe a PDF?",
      options: [
        { text: "JasperCompileManager.", correct: false },
        { text: "JasperExportManager.", correct: true },
        { text: "JasperFillManager.", correct: false },
      ],
    },
    {
      question:
        "¿Qué formato de archivo genera JasperSoft para almacenar el diseño de informes?",
      options: [
        { text: "JSON con extensión .json.", correct: false },
        { text: "XML con extensión .jrxml.", correct: true },
        { text: "HTML con extensión .html.", correct: false },
      ],
    },
    {
      question:
        "¿Qué herramienta gráfica basada en Eclipse permite la generación de informes en tiempo de ejecución?",
      options: [
        { text: "BIRT.", correct: true },
        { text: "Pentaho Designer.", correct: false },
        { text: "JasperSoft Studio.", correct: false },
      ],
    },
    {
      question: "¿Qué función tiene el pie de página en un informe JasperSoft?",
      options: [
        { text: "Agregar encabezados.", correct: false },
        { text: "Mostrar totales de página.", correct: true },
        { text: "Insertar gráficos.", correct: false },
      ],
    },
    {
      question:
        "¿Qué formato de salida en JasperSoft es más adecuado para edición posterior?",
      options: [
        { text: "PDF.", correct: false },
        { text: "Excel.", correct: true },
        { text: "HTML.", correct: false },
      ],
    },
    {
      question: "¿Qué elemento no es esencial al crear un tutorial multimedia?",
      options: [
        { text: "Una conexión a Internet estable.", correct: true },
        { text: "Un software de grabación de pantalla.", correct: false },
        { text: "Un micrófono para capturar audio.", correct: false },
      ],
    },
    {
      question:
        "¿Qué característica distingue un sistema de ayuda sensible al contexto?",
      options: [
        { text: "Es accesible solo desde un menú principal.", correct: false },
        {
          text: "La ayuda se genera automáticamente desde el código fuente.",
          correct: false,
        },
        {
          text: "La ayuda varía según el objeto seleccionado en la interfaz.",
          correct: true,
        },
      ],
    },
    {
      question:
        "¿Qué característica hace a Visual Code útil en la creación de documentación interactiva?",
      options: [
        {
          text: "Proporciona un entorno ligero para desarrollo HTML.",
          correct: true,
        },
        { text: "Permite edición en tiempo real de videos.", correct: false },
        {
          text: "Incluye plantillas predefinidas para diagramas UML.",
          correct: false,
        },
      ],
    },
    {
      question:
        "¿Qué componente debe considerarse al planificar videos formativos?",
      options: [
        {
          text: "La calidad del sonido capturado por el micrófono.",
          correct: true,
        },
        {
          text: "La resolución de pantalla del usuario final.",
          correct: false,
        },
        {
          text: "La compatibilidad con sistemas operativos antiguos.",
          correct: false,
        },
      ],
    },
    {
      question:
        "¿Cuál es la diferencia principal entre un índice y una tabla de contenidos?",
      options: [
        {
          text: "El índice incluye números de página y la tabla no.",
          correct: false,
        },
        {
          text: "El índice lista palabras clave, mientras que la tabla refleja la estructura del documento.",
          correct: true,
        },
        {
          text: "La tabla de contenidos está al final, mientras que el índice está al inicio.",
          correct: false,
        },
      ],
    },
    {
      question:
        "¿Qué es necesario para implementar ayuda sensible al contexto en JavaFX?",
      options: [
        { text: "Crear manuales en formato PDF.", correct: false },
        { text: "Asignar IDs de mapa a los elementos GUI.", correct: true },
        {
          text: "Implementar diagramas UML de comportamiento.",
          correct: false,
        },
      ],
    },
    {
      question:
        "¿Qué herramienta genera ficheros de ayuda en formato HTML compilado?",
      options: [
        { text: "UML Designer.", correct: false },
        { text: "Microsoft HTML Help Workshop.", correct: true },
        { text: "DocBook.", correct: false },
      ],
    },
    {
      question:
        "¿Qué formato de ayuda permite edición con editores de código fuente?",
      options: [
        { text: "CHM.", correct: false },
        { text: "XML.", correct: true },
        { text: "PDF.", correct: false },
      ],
    },
    {
      question:
        "¿Qué formato de ayuda utiliza el sistema operativo Linux para su documentación?",
      options: [
        { text: "PDF.", correct: false },
        { text: "Man pages.", correct: true },
        { text: "HTML.", correct: false },
      ],
    },
    {
      question: "¿Qué apartado no debe incluirse en un manual técnico?",
      options: [
        { text: "Glosario para usuarios finales.", correct: true },
        { text: "Pruebas realizadas al proyecto.", correct: false },
        { text: "Programa fuente del software.", correct: false },
      ],
    },
    {
      question:
        "¿Qué ventaja tiene incluir el JRE en el mismo directorio que el ejecutable?",
      options: [
        {
          text: "Evita problemas de compatibilidad con la versión instalada en el sistema.",
          correct: true,
        },
        {
          text: "Permite que el instalador sea multiplataforma.",
          correct: false,
        },
        {
          text: "Mejora la velocidad de ejecución de la aplicación.",
          correct: false,
        },
      ],
    },
    {
      question:
        "¿Qué ventaja ofrece la distribución de software mediante servidores web?",
      options: [
        {
          text: "Permite a los usuarios descargar aplicaciones de manera centralizada y segura.",
          correct: true,
        },
        {
          text: "Es exclusivamente compatible con aplicaciones móviles.",
          correct: false,
        },
        {
          text: "Evita la necesidad de un instalador en el sistema operativo destino.",
          correct: false,
        },
      ],
    },
    {
      question:
        "¿Qué parámetro se utiliza en Inno Setup para activar una instalación silenciosa?",
      options: [
        { text: "InstallSilent=yes.", correct: false },
        { text: "NoUserInput=true.", correct: false },
        { text: "SilentInstall=yes.", correct: true },
      ],
    },
    {
      question:
        "¿Qué paso es necesario para distribuir un instalador mediante XAMPP?",
      options: [
        { text: "Configurar un script en Inno Setup.", correct: false },
        {
          text: "Colocar el instalador en la carpeta htdocs del servidor.",
          correct: true,
        },
        {
          text: "Crear un repositorio de aplicaciones específico.",
          correct: false,
        },
      ],
    },
    {
      question:
        "¿Qué característica hace a los repositorios más seguros para la distribución de software?",
      options: [
        {
          text: "No requieren conexión a internet para funcionar.",
          correct: false,
        },
        {
          text: "Garantizan la compatibilidad con todos los sistemas operativos.",
          correct: false,
        },
        {
          text: "Verifican y gestionan las actualizaciones de las aplicaciones.",
          correct: true,
        },
      ],
    },
    {
      question:
        "¿Qué función cumple un desinstalador generado automáticamente en Windows?",
      options: [
        {
          text: "Eliminar registros del sistema innecesarios.",
          correct: false,
        },
        {
          text: "Facilitar la desinstalación completa de la aplicación.",
          correct: true,
        },
        { text: "Reinstalar el software automáticamente.", correct: false },
      ],
    },
    {
      question:
        "¿Qué herramienta se utiliza para generar archivos JAR en Java?",
      options: [
        { text: "Launch4j.", correct: false },
        { text: "Visual Studio.", correct: false },
        { text: "Eclipse.", correct: true },
      ],
    },
    {
      question:
        "¿Qué componente permite ejecutar aplicaciones Java en cualquier sistema operativo?",
      options: [
        { text: "RPM.", correct: false },
        { text: "MSI.", correct: false },
        { text: "JAR.", correct: true },
      ],
    },
    {
      question:
        "¿Qué se utiliza para distribuir software desde un servidor web?",
      options: [
        { text: "Modelos cliente-servidor exclusivamente.", correct: false },
        { text: "Archivos PDF descargables.", correct: false },
        { text: "Repositorios o tiendas de aplicaciones.", correct: true },
      ],
    },
    {
      question: "¿Qué permite la configuración de Inno Setup?",
      options: [
        { text: "Diseñar interfaces gráficas complejas.", correct: false },
        {
          text: "Crear paquetes autoinstalables personalizables.",
          correct: true,
        },
        {
          text: "Generar certificados digitales automáticamente.",
          correct: false,
        },
      ],
    },
    {
      question:
        "¿Qué herramienta es más adecuada para gestionar errores en un proyecto de software?",
      options: [
        { text: "NUnit.", correct: false },
        { text: "Apache JMeter.", correct: false },
        { text: "Bugzilla.", correct: true },
      ],
    },
    {
      question:
        "¿Qué herramienta permite realizar pruebas de rendimiento y carga en aplicaciones web?",
      options: [
        { text: "JUnit.", correct: false },
        { text: "Apache JMeter.", correct: true },
        { text: "Bugzilla.", correct: false },
      ],
    },
    {
      question: "¿Qué característica tiene SonarQube en el análisis de código?",
      options: [
        { text: "Detecta errores de sintaxis exclusivamente.", correct: false },
        {
          text: "Automatiza pruebas unitarias en entornos Java.",
          correct: false,
        },
        {
          text: "Realiza análisis de calidad y seguridad del código.",
          correct: true,
        },
      ],
    },
    {
      question: "¿Qué función cumple XUnit en el proceso de pruebas?",
      options: [
        {
          text: "Facilita pruebas unitarias para múltiples lenguajes de programación.",
          correct: true,
        },
        { text: "Automatiza pruebas de carga y estrés.", correct: false },
        {
          text: "Permite el rastreo de errores en tiempo real.",
          correct: false,
        },
      ],
    },
    {
      question:
        "¿Qué prueba asegura que los cambios en el software no afectan funcionalidades existentes?",
      options: [
        { text: "Pruebas de regresión.", correct: true },
        { text: "Pruebas de aceptación.", correct: false },
        { text: "Pruebas de integración.", correct: false },
      ],
    },
    {
      question:
        "¿Qué permite la configuración del plugin sonar-maven-plugin en Maven?",
      options: [
        {
          text: "Generar informes de rendimiento para aplicaciones web.",
          correct: false,
        },
        {
          text: "Automatizar las pruebas unitarias del software.",
          correct: false,
        },
        {
          text: "Integrar análisis de calidad del código con SonarQube.",
          correct: true,
        },
      ],
    },
    {
      question:
        "¿Qué porcentaje del esfuerzo del proyecto se dedica generalmente a las pruebas?",
      options: [
        { text: "10-20%.", correct: false },
        { text: "30-40%.", correct: true },
        { text: "50-60%.", correct: false },
      ],
    },
    {
      question: "¿Cuál es el objetivo principal de las pruebas de software?",
      options: [
        { text: "Reducir el tiempo de desarrollo.", correct: false },
        { text: "Garantizar la calidad del producto final.", correct: true },
        {
          text: "Aumentar el tamaño del equipo de desarrollo.",
          correct: false,
        },
      ],
    },
    {
      question: "¿Qué ventaja ofrece SonarQube en el análisis de software?",
      options: [
        {
          text: "Analiza código duplicado, calidad y vulnerabilidades de seguridad.",
          correct: true,
        },
        {
          text: "Automatiza pruebas de regresión exclusivamente en entornos Java.",
          correct: false,
        },
        {
          text: "Permite evaluar únicamente errores de sintaxis.",
          correct: false,
        },
      ],
    },
    {
      question:
        "¿Qué tipo de prueba evalúa cómo se comporta un sistema más allá de sus límites normales?",
      options: [
        { text: "Prueba de aceptación.", correct: false },
        { text: "Prueba de estrés.", correct: true },
        { text: "Prueba de carga.", correct: false },
      ],
    },
    {
      question:
        "¿Qué componente se utiliza para mostrar un informe en una aplicación Swing?",
      options: [
        { text: "JRViewer.", correct: true },
        { text: "JasperView.", correct: false },
        { text: "SwingReportViewer.", correct: false },
      ],
    },
    {
      question:
        "¿Qué formato no editable se utiliza para exportar informes desde JasperSoft?",
      options: [
        { text: "Excel.", correct: false },
        { text: "CSV.", correct: false },
        { text: "PDF.", correct: true },
      ],
    },
    {
      question:
        "¿Qué clase de JasperReports Library se usa para rellenar datos en un informe?",
      options: [
        { text: "JasperCompileManager.", correct: false },
        { text: "JasperExportManager.", correct: false },
        { text: "JasperFillManager.", correct: true },
      ],
    },
    {
      question:
        "¿Qué componente de JasperSoft permite añadir gráficos al informe?",
      options: [
        { text: "Diagram.", correct: false },
        { text: "Chart.", correct: true },
        { text: "Graph.", correct: false },
      ],
    },
    {
      question:
        "¿Qué método en JasperReports se utiliza para compilar un informe?",
      options: [
        { text: "compileReport().", correct: true },
        { text: "exportReport().", correct: false },
        { text: "fillReport().", correct: false },
      ],
    },
    {
      question:
        "¿Qué componente de JasperSoft permite añadir encabezados en un informe?",
      options: [
        { text: "Group Header.", correct: false },
        { text: "Page Header.", correct: false },
        { text: "Static Text.", correct: true },
      ],
    },
    {
      question:
        "¿Qué comando de JasperSoft Studio permite probar la conexión a una base de datos?",
      options: [
        { text: "Check Connection.", correct: false },
        { text: "Verify Connection.", correct: false },
        { text: "Test Connection.", correct: true },
      ],
    },
    {
      question:
        "¿Qué formato de archivo utiliza JasperSoft para definir la estructura de un informe?",
      options: [
        { text: ".json.", correct: false },
        { text: ".xml.", correct: false },
        { text: ".jrxml.", correct: true },
      ],
    },
    {
      question:
        "¿Cuál es la función principal de OBS Studio en la creación de documentación?",
      options: [
        { text: "Gestionar bases de datos documentales.", correct: false },
        { text: "Capturar y editar videos para simulaciones.", correct: true },
        { text: "Diseñar interfaces gráficas interactivas.", correct: false },
      ],
    },
    {
      question:
        "¿Qué herramienta se usa comúnmente para gestionar una intranet de documentos?",
      options: [
        { text: "Microsoft SQL Server.", correct: false },
        { text: "Visual Studio Code.", correct: false },
        { text: "LAMP sobre un servidor Ubuntu.", correct: true },
      ],
    },
    {
      question: "¿Qué formato de ayuda es común en sistemas Linux?",
      options: [
        { text: "PDF.", correct: false },
        { text: "CHM.", correct: false },
        { text: "Man pages.", correct: true },
      ],
    },
    {
      question: "¿Qué beneficio ofrece la ayuda sensible al contexto?",
      options: [
        {
          text: "Permite instalar aplicaciones automáticamente.",
          correct: false,
        },
        {
          text: "Muestra información relevante según el lugar donde se encuentra el usuario.",
          correct: true,
        },
        {
          text: "Es un sistema de seguridad para aplicaciones.",
          correct: false,
        },
      ],
    },
    {
      question:
        "¿Qué herramienta de captura permite editar en tiempo real las imágenes capturadas?",
      options: [
        { text: "LightShot.", correct: true },
        { text: "OBS Studio.", correct: false },
        { text: "Snipping Tool.", correct: false },
      ],
    },
    {
      question:
        "¿Qué herramienta multimedia es esencial para generar tutoriales interactivos?",
      options: [
        { text: "Software de edición de videos.", correct: true },
        { text: "Un editor de texto enriquecido.", correct: false },
        { text: "Un IDE de desarrollo de software.", correct: false },
      ],
    },
    {
      question:
        "¿Qué método de distribución permite instalar aplicaciones directamente en dispositivos específicos?",
      options: [
        { text: "Repositorios.", correct: false },
        { text: "Distribución Ad-Hoc.", correct: true },
        { text: "Sitios Web.", correct: false },
      ],
    },
    {
      question:
        "¿Qué herramienta de Windows se utiliza para firmar digitalmente los instaladores?",
      options: [
        { text: "signtool.", correct: true },
        { text: "Inno Setup.", correct: false },
        { text: "XAMPP.", correct: false },
      ],
    },
    {
      question:
        "¿Qué se incluye en la fase de análisis del desarrollo de software?",
      options: [
        { text: "La definición de requisitos del proyecto.", correct: true },
        { text: "La distribución del software.", correct: false },
        { text: "La creación de paquetes autoinstalables.", correct: false },
      ],
    },
    {
      question: "¿Qué objetivo tiene la distribución de aplicaciones?",
      options: [
        { text: "Realizar pruebas de compatibilidad.", correct: false },
        { text: "Diseñar interfaces gráficas avanzadas.", correct: false },
        {
          text: "Preparar el software para su instalación en dispositivos de usuarios finales.",
          correct: true,
        },
      ],
    },
    {
      question: "¿Qué hace la configuración 'SilentInstall=yes' en Inno Setup?",
      options: [
        { text: "Evita la creación de un desinstalador.", correct: false },
        {
          text: "Mejora la compatibilidad con otros sistemas operativos.",
          correct: false,
        },
        {
          text: "Permite una instalación sin intervención del usuario.",
          correct: true,
        },
      ],
    },
    {
      question: "¿Cuál es el propósito principal de las pruebas de regresión?",
      options: [
        {
          text: "Verificar el rendimiento del sistema bajo carga extrema.",
          correct: false,
        },
        {
          text: "Detectar errores introducidos por cambios recientes en el software.",
          correct: true,
        },
        { text: "Evaluar la interfaz gráfica del sistema.", correct: false },
      ],
    },
    {
      question: "¿Qué es un caso de prueba?",
      options: [
        { text: "Un informe del progreso del desarrollo.", correct: false },
        {
          text: "Una descripción de la estructura del software.",
          correct: false,
        },
        {
          text: "Una simulación de uso para evaluar errores potenciales.",
          correct: true,
        },
      ],
    },
    {
      question: "¿Qué es una prueba beta?",
      options: [
        {
          text: "Una prueba funcional realizada por el equipo de desarrollo.",
          correct: false,
        },
        {
          text: "Un análisis de la velocidad del sistema bajo carga.",
          correct: false,
        },
        {
          text: "Una prueba realizada por el cliente en su entorno.",
          correct: true,
        },
      ],
    },
    {
      question: "¿Cuál es una limitación de las pruebas de software?",
      options: [
        { text: "Son siempre automatizadas.", correct: false },
        { text: "Garantizan la ausencia total de errores.", correct: false },
        {
          text: "No pueden asegurar que el software esté completamente libre de errores.",
          correct: true,
        },
      ],
    },
    {
      question:
        "¿Qué tipo de prueba evalúa el tiempo de respuesta del sistema bajo carga?",
      options: [
        { text: "Prueba de estrés.", correct: false },
        { text: "Prueba de rendimiento.", correct: true },
        { text: "Prueba de resistencia.", correct: false },
      ],
    },
    {
      question:
        "¿Qué paquete de JasperReports incluye clases específicas para exportar informes a formatos personalizados?",
      options: [
        { text: "net.sf.jasperreports.engine.export.", correct: true },
        { text: "net.sf.jasperreports.engine.", correct: false },
        { text: "net.sf.jasperreports.chart.", correct: false },
      ],
    },
    {
      question:
        "¿Qué campo permite agregar el número de página actual en un informe de JasperSoft?",
      options: [
        { text: "Current Page.", correct: false },
        { text: "Page Number.", correct: true },
        { text: "Page Counter.", correct: false },
      ],
    },
    {
      question:
        "¿Qué herramienta permite generar informes y está escrita completamente en Java?",
      options: [
        { text: "JasperSoft.", correct: true },
        { text: "Crystal Reports.", correct: false },
        { text: "Pentaho.", correct: false },
      ],
    },
    {
      question:
        "¿Qué tipo de agrupación permite calcular totales y subtotales en JasperSoft?",
      options: [
        { text: "Summarized Fields.", correct: false },
        { text: "Aggregated Sections.", correct: false },
        { text: "Group Bands.", correct: true },
      ],
    },
    {
      question:
        "¿Qué parámetro permite la comunicación entre el informe y el usuario?",
      options: [
        { text: "Variable.", correct: false },
        { text: "Parameter.", correct: true },
        { text: "Field.", correct: false },
      ],
    },
    {
      question: "¿Qué formato es típico para ficheros de ayuda en Windows?",
      options: [
        { text: ".CHM", correct: true },
        { text: ".RTF", correct: false },
        { text: ".TXT", correct: false },
      ],
    },
    {
      question: "¿Qué característica debe incluir un manual técnico?",
      options: [
        { text: "Un glosario de términos técnicos.", correct: false },
        {
          text: "Información sobre la estrategia de pruebas realizadas.",
          correct: true,
        },
        { text: "Una sección de preguntas frecuentes.", correct: false },
      ],
    },
    {
      question:
        "¿Qué herramienta es útil para crear una intranet básica para documentación?",
      options: [
        { text: "Microsoft Office.", correct: false },
        { text: "Visual Studio Code.", correct: false },
        { text: "LAMP sobre Ubuntu Server.", correct: true },
      ],
    },
    {
      question:
        "¿Qué permite la personalización de un instalador con Inno Setup?",
      options: [
        {
          text: "Agregar certificados de seguridad avanzados.",
          correct: false,
        },
        {
          text: "Definir logotipos, idiomas y botones del instalador.",
          correct: true,
        },
        {
          text: "Crear bases de datos internas para el software.",
          correct: false,
        },
      ],
    },
    {
      question: "¿Qué define a una instalación desatendida?",
      options: [
        { text: "Se ejecuta sin intervención del usuario.", correct: true },
        {
          text: "Solo puede realizarla un técnico especializado.",
          correct: false,
        },
        {
          text: "Requiere confirmación manual para cada paso.",
          correct: false,
        },
      ],
    },
    {
      question: "¿Qué es un paquete MSI?",
      options: [
        {
          text: "Un archivo para la distribución de aplicaciones en Linux.",
          correct: false,
        },
        { text: "Un archivo de datos en formato XML.", correct: false },
        {
          text: "Un formato de archivo de instalación para sistemas Windows.",
          correct: true,
        },
      ],
    },
    {
      question: "¿Qué debe hacerse antes de generar un JAR?",
      options: [
        {
          text: "Comprobar que están todas las librerías necesarias.",
          correct: true,
        },
        {
          text: "Configurar las variables de entorno globales.",
          correct: false,
        },
        {
          text: "Crear un script de instalación en Inno Setup.",
          correct: false,
        },
      ],
    },
    {
      question: "¿Qué paso se realiza al crear un asistente de instalación?",
      options: [
        { text: "Definir el idioma de la instalación.", correct: true },
        { text: "Configurar el entorno de desarrollo.", correct: false },
        { text: "Incluir pruebas unitarias en el paquete.", correct: false },
      ],
    },
    {
      question:
        "¿Qué tipo de pruebas evalúa cómo un sistema maneja grandes volúmenes de datos?",
      options: [
        { text: "Pruebas de resistencia.", correct: false },
        { text: "Pruebas de estrés.", correct: false },
        { text: "Pruebas de volumen.", correct: true },
      ],
    },
    {
      question: "¿Qué es una prueba unitaria?",
      options: [
        {
          text: "Analizar el rendimiento del sistema completo.",
          correct: false,
        },
        {
          text: "Verificar el funcionamiento correcto de un módulo específico.",
          correct: true,
        },
        {
          text: "Comprobar la integración de todos los módulos.",
          correct: false,
        },
      ],
    },
    {
      question:
        "¿Qué tipo de pruebas se centra en la calidad de la experiencia del usuario?",
      options: [
        { text: "Pruebas de usabilidad.", correct: true },
        { text: "Pruebas de integración.", correct: false },
        { text: "Pruebas de regresión.", correct: false },
      ],
    },
    {
      question:
        "¿Qué parámetro en la configuración del gráfico en JasperSoft se utiliza para agrupar datos?",
      options: [
        { text: "resetGroup.", correct: true },
        { text: "Series.", correct: false },
        { text: "incrementType.", correct: false },
      ],
    },
    {
      question:
        "¿Qué atributo del dataset define el tipo de incremento de un gráfico?",
      options: [
        { text: "resetType.", correct: false },
        { text: "incrementGroup.", correct: false },
        { text: "incrementType.", correct: true },
      ],
    },
    {
      question:
        "¿Qué funcionalidad permite JasperSoft al incluir gráficos en los informes?",
      options: [
        { text: "Visualización interactiva de datos.", correct: true },
        { text: "Generación automática de bases de datos.", correct: false },
        { text: "Ejecución de consultas SQL.", correct: false },
      ],
    },
    {
      question:
        "¿Qué tipo de informe es más adecuado para aplicaciones distribuidas?",
      options: [
        { text: "Informes no incrustados.", correct: true },
        { text: "Informes en tiempo real.", correct: false },
        { text: "Informes incrustados.", correct: false },
      ],
    },
    {
      question:
        "¿Qué secciones de JasperSoft se usan para mostrar el cuerpo del informe?",
      options: [
        { text: "Detail.", correct: true },
        { text: "Summary.", correct: false },
        { text: "Group Header.", correct: false },
      ],
    },
    {
      question:
        "¿Cuál es una ventaja clave del uso de HTML para documentación técnica?",
      options: [
        {
          text: "La facilidad para convertir archivos en ejecutables.",
          correct: false,
        },
        {
          text: "La capacidad de ejecutar directamente en cualquier dispositivo.",
          correct: false,
        },
        {
          text: "La posibilidad de incorporar elementos multimedia interactivos.",
          correct: true,
        },
      ],
    },
    {
      question: "¿Cuál es una característica de los ficheros de ayuda en HTML?",
      options: [
        {
          text: "Pueden incluir elementos multimedia y ser traducidos fácilmente.",
          correct: true,
        },
        { text: "Son exclusivos para usuarios expertos.", correct: false },
        { text: "Solo se usan en sistemas operativos Linux.", correct: false },
      ],
    },
    {
      question: "¿Qué ventaja tiene el formato RTF para ficheros de ayuda?",
      options: [
        {
          text: "Permite crear interfaces gráficas avanzadas.",
          correct: false,
        },
        { text: "Es fácil de manejar y no propaga virus.", correct: true },
        { text: "Solo puede ser leído en sistemas Windows.", correct: false },
      ],
    },
    {
      question:
        "¿Qué tipo de documento se utiliza para planificar pruebas de software?",
      options: [
        { text: "Guía rápida de instalación.", correct: false },
        { text: "Manual de usuario.", correct: false },
        { text: "Cuaderno de carga en el manual técnico.", correct: true },
      ],
    },
    {
      question: "¿Qué característica tienen los paquetes autoinstalables?",
      options: [
        {
          text: "Requieren asistencia técnica para su instalación.",
          correct: false,
        },
        {
          text: "Simplifican la instalación con mínima interacción del usuario.",
          correct: true,
        },
        { text: "Son exclusivos para sistemas Linux.", correct: false },
      ],
    },
    {
      question: "¿Qué parámetro puede personalizarse con Inno Setup?",
      options: [
        { text: "La resolución de pantalla.", correct: false },
        { text: "La compatibilidad con Linux.", correct: false },
        { text: "La configuración de directorios.", correct: true },
      ],
    },
    {
      question: "¿Cuál es el primer paso para generar un JAR en Eclipse?",
      options: [
        { text: "Crear un script de instalación.", correct: false },
        { text: "Definir la clase main de la aplicación.", correct: true },
        { text: "Configurar la base de datos MySQL.", correct: false },
      ],
    },
    {
      question:
        "¿Qué enfoque de pruebas de integración utiliza simuladores para módulos de bajo nivel?",
      options: [
        { text: "Pruebas de integración descendentes.", correct: false },
        { text: "Pruebas de integración ascendentes.", correct: true },
        { text: "Pruebas de regresión.", correct: false },
      ],
    },
    {
      question: "¿Qué tipo de datos se utilizan en las pruebas de caja negra?",
      options: [
        { text: "Exclusivamente valores predeterminados.", correct: false },
        { text: "Datos correctos, erróneos y extremos.", correct: true },
        { text: "Solamente datos correctos.", correct: false },
      ],
    },
    {
      question: "¿Qué caracteriza a las pruebas de caja negra?",
      options: [
        { text: "Analizan la estructura interna del código.", correct: false },
        {
          text: "Evalúan el sistema a través de su interfaz sin examinar su funcionamiento interno.",
          correct: true,
        },
        {
          text: "Verifican únicamente las condiciones de los bucles y sentencias.",
          correct: false,
        },
      ],
    },
    {
      question: "¿Qué tipo de datos se utilizan en pruebas de caja negra?",
      options: [
        { text: "Exclusivamente valores predeterminados.", correct: false },
        { text: "Solamente datos válidos.", correct: false },
        { text: "Datos válidos, inválidos y extremos.", correct: true },
      ],
    },
    {
      question:
        "¿Qué opción es adecuada para trabajar con múltiples fuentes de datos en un informe?",
      options: [
        { text: "BIRT.", correct: true },
        { text: "Crystal Reports.", correct: false },
        { text: "JasperSoft Studio.", correct: false },
      ],
    },
    {
      question:
        "¿Qué componente de JasperSoft permite definir la consulta SQL del informe?",
      options: [
        { text: "Report Query.", correct: false },
        { text: "Query Manager.", correct: false },
        { text: "Dataset and Query.", correct: true },
      ],
    },
    {
      question:
        "¿Qué tipo de dato se utiliza para calcular valores agrupados en JasperSoft?",
      options: [
        { text: "Aggregated Fields.", correct: false },
        { text: "Variables.", correct: true },
        { text: "Static Text.", correct: false },
      ],
    },
    {
      question: "¿Qué es un fichero de ayuda?",
      options: [
        {
          text: "Un software para diseñar interfaces gráficas.",
          correct: false,
        },
        {
          text: "Un archivo para almacenar datos de usuarios.",
          correct: false,
        },
        {
          text: "Un documento para guiar a los usuarios de una aplicación.",
          correct: true,
        },
      ],
    },
    {
      question: "¿Qué función cumple la tabla de contenidos en un documento?",
      options: [
        {
          text: "Reflejar la estructura y secciones del documento.",
          correct: true,
        },
        { text: "Mostrar palabras clave del texto.", correct: false },
        {
          text: "Resumir el contenido del documento en una página.",
          correct: false,
        },
      ],
    },
    {
      question: "¿Qué se incluye típicamente en una guía rápida de usuario?",
      options: [
        {
          text: "Instrucciones detalladas para desarrolladores.",
          correct: false,
        },
        {
          text: "Aspectos clave como instalación y uso básico.",
          correct: true,
        },
        {
          text: "Un resumen de todas las funcionalidades del software.",
          correct: false,
        },
      ],
    },
    {
      question: "¿Qué fase incluye la validación de los módulos desarrollados?",
      options: [
        { text: "Desarrollo.", correct: false },
        { text: "Integración y pruebas.", correct: true },
        { text: "Diseño.", correct: false },
      ],
    },
    {
      question:
        "¿Qué herramienta es útil para personalizar la instalación en Windows?",
      options: [
        { text: "Inno Setup.", correct: true },
        { text: "DocBook.", correct: false },
        { text: "Launch4j.", correct: false },
      ],
    },
    {
      question: "¿Qué permite Launch4j en el proceso de instalación?",
      options: [
        { text: "Diseñar interfaces gráficas interactivas.", correct: false },
        { text: "Crear ejecutables a partir de archivos JAR.", correct: true },
        { text: "Generar paquetes DEB para Linux.", correct: false },
      ],
    },
    {
      question:
        "¿Qué fase asegura que el software cumple con los requisitos definidos?",
      options: [
        { text: "Validación.", correct: true },
        { text: "Diseño.", correct: false },
        { text: "Análisis.", correct: false },
      ],
    },
    {
      question:
        "¿Qué tipo de pruebas se realiza después de integrar todos los módulos de una aplicación?",
      options: [
        { text: "Pruebas unitarias.", correct: false },
        { text: "Pruebas de sistema.", correct: true },
        { text: "Pruebas de carga.", correct: false },
      ],
    },
    {
      question:
        "¿Qué herramienta permite realizar análisis de calidad del código fuente?",
      options: [
        { text: "JUnit.", correct: false },
        { text: "Bugzilla.", correct: false },
        { text: "Sonarqube.", correct: true },
      ],
    },
    {
      question:
        "¿Qué ventaja tiene JasperSoft respecto a otras herramientas de informes?",
      options: [
        { text: "Es compatible con Visual Basic.", correct: false },
        { text: "Genera informes en múltiples formatos.", correct: true },
        { text: "No requiere conexión a bases de datos.", correct: false },
      ],
    },
    {
      question:
        "¿Qué componente en JasperSoft Studio se utiliza para mostrar subtotales y totales en un informe?",
      options: [
        { text: "Footer Band.", correct: false },
        { text: "Summary Band.", correct: true },
        { text: "Detail Band.", correct: false },
      ],
    },
    {
      question:
        "¿Qué herramienta permite gestionar librerías externas en JasperSoft Studio?",
      options: [
        { text: "Java Build Path.", correct: true },
        { text: "External Resources.", correct: false },
        { text: "Library Manager.", correct: false },
      ],
    },
    {
      question: "¿Cuál es la función principal de los ficheros de ayuda?",
      options: [
        {
          text: "Ayudar a los usuarios a utilizar y comprender la aplicación.",
          correct: true,
        },
        { text: "Generar gráficos de rendimiento.", correct: false },
        {
          text: "Documentar la codificación interna del software.",
          correct: false,
        },
      ],
    },
    {
      question:
        "¿Qué herramienta ayuda a generar documentación técnica reutilizable?",
      options: [
        { text: "HTML Help Workshop.", correct: false },
        { text: "Draw.io.", correct: false },
        { text: "DocBook.", correct: true },
      ],
    },
    {
      question: "¿Qué herramienta puede incluir un logotipo en un instalador?",
      options: [
        { text: "Launch4j.", correct: false },
        { text: "Inno Setup.", correct: true },
        { text: "Eclipse.", correct: false },
      ],
    },
    {
      question: "¿Qué se incluye en un paquete autoinstalable?",
      options: [
        {
          text: "Un ejecutable para el sistema operativo y documentación asociada.",
          correct: true,
        },
        { text: "Un manual detallado de mantenimiento.", correct: false },
        { text: "Una copia de seguridad de la aplicación.", correct: false },
      ],
    },
    {
      question: "¿Qué caracteriza a las pruebas alfa?",
      options: [
        {
          text: "Se realizan en el entorno del desarrollador con supervisión.",
          correct: true,
        },
        {
          text: "Evalúan la integración de todos los módulos del sistema.",
          correct: false,
        },
        {
          text: "Se realizan en el entorno del cliente sin supervisión.",
          correct: false,
        },
      ],
    },
    {
      question: "¿Qué asegura una buena documentación de las pruebas?",
      options: [
        {
          text: "Proporcionar un registro claro para auditorías y seguimientos.",
          correct: true,
        },
        {
          text: "Evitar errores humanos durante las pruebas manuales.",
          correct: false,
        },
        {
          text: "Reducir el tiempo necesario para pruebas futuras.",
          correct: false,
        },
      ],
    },
    {
      question:
        "¿Qué pruebas se realizan antes de liberar un programa para explotación?",
      options: [
        { text: "Pruebas funcionales y no funcionales.", correct: true },
        { text: "Pruebas de mantenimiento.", correct: false },
        { text: "Pruebas de sistema.", correct: false },
      ],
    },
    {
      question: "¿Qué campo permite incluir la fecha actual en un informe?",
      options: [
        { text: "Static Date.", correct: false },
        { text: "Report Date.", correct: false },
        { text: "Current Date.", correct: true },
      ],
    },
    {
      question: "¿Qué es DocBook?",
      options: [
        { text: "Un programa para edición de video.", correct: false },
        {
          text: "Un lenguaje de marcas para documentación técnica.",
          correct: true,
        },
        { text: "Una herramienta para creación de UML.", correct: false },
      ],
    },
    {
      question: "¿Qué tipo de ayuda proporciona JavaHelp?",
      options: [
        { text: "Guías de usuario con gráficos avanzados.", correct: false },
        { text: "Ayuda sensible al contexto.", correct: true },
        { text: "Ayuda basada en texto enriquecido.", correct: false },
      ],
    },
    {
      question: "¿Qué característica define a un diagrama UML estructural?",
      options: [
        { text: "Describe los estados de la aplicación.", correct: false },
        {
          text: "Representa la estructura de la aplicación en un momento dado.",
          correct: true,
        },
        { text: "Modela interacciones entre componentes.", correct: false },
      ],
    },
    {
      question:
        "¿Qué herramienta se utiliza para crear ejecutables en sistemas Windows a partir de JAR?",
      options: [
        { text: "LightShot.", correct: false },
        { text: "Launch4j.", correct: true },
        { text: "Inno Setup.", correct: false },
      ],
    },
    {
      question: "¿Qué paso es necesario antes de ejecutar un archivo JAR?",
      options: [
        { text: "Generar un paquete autoinstalable.", correct: false },
        { text: "Instalar el JRE en el sistema operativo.", correct: true },
        { text: "Configurar permisos de usuario.", correct: false },
      ],
    },
    {
      question: "¿Qué se evalúa en una prueba de validación?",
      options: [
        { text: "La estructura interna del código.", correct: false },
        { text: "La velocidad del sistema bajo carga.", correct: false },
        {
          text: "Que el sistema cumple las especificaciones del cliente.",
          correct: true,
        },
      ],
    },
    {
      question: "¿Qué asegura la verificación en el proceso de pruebas?",
      options: [
        {
          text: "Que el sistema hace lo que debe hacer técnicamente.",
          correct: true,
        },
        {
          text: "Que los usuarios finales aprueben el sistema.",
          correct: false,
        },
        { text: "Que la interfaz sea visualmente atractiva.", correct: false },
      ],
    },
    {
      question: "¿Qué se debe incluir en un buen caso de prueba?",
      options: [
        { text: "La estructura completa del código.", correct: false },
        {
          text: "Entradas, condiciones de ejecución y resultados esperados.",
          correct: true,
        },
        { text: "Una descripción general del sistema.", correct: false },
      ],
    },
    {
      question:
        "¿Qué herramienta de pruebas está diseñada para simular múltiples usuarios concurrentes?",
      options: [
        { text: "NUnit.", correct: false },
        { text: "XUnit.", correct: false },
        { text: "Apache JMeter.", correct: true },
      ],
    },
    {
      question:
        "¿Qué comando permite agregar una nueva fuente de datos en JasperSoft Studio?",
      options: [
        { text: "Add Data Source.", correct: false },
        { text: "Connect Database.", correct: false },
        { text: "New Data Adapter.", correct: true },
      ],
    },
    {
      question: "¿Cuál es un ejemplo de sistema de búsqueda estructurado?",
      options: [
        { text: "Bases de datos documentales.", correct: true },
        {
          text: "Listas de referencias al final de un documento.",
          correct: false,
        },
        { text: "Motores de búsqueda como Google.", correct: false },
      ],
    },
    {
      question: "¿Qué formato de archivo es específico para Java?",
      options: [
        { text: "MSI.", correct: false },
        { text: "RPM.", correct: false },
        { text: "JAR.", correct: true },
      ],
    },
    {
      question: "¿Qué incluye el metadata de configuración de un instalador?",
      options: [
        { text: "Las pruebas de integración realizadas.", correct: false },
        { text: "El esquema de base de datos utilizado.", correct: false },
        { text: "El nombre de la aplicación, versión y autor.", correct: true },
      ],
    },
    {
      question:
        "¿Qué tipo de prueba asegura que una aplicación maneja correctamente entradas incorrectas?",
      options: [
        { text: "Prueba de robustez.", correct: true },
        { text: "Prueba de regresión.", correct: false },
        { text: "Prueba de resistencia.", correct: false },
      ],
    },
    {
      question: "¿Qué se requiere para ejecutar pruebas con SonarQube?",
      options: [
        {
          text: "Ejecutar el software directamente desde su archivo descargado.",
          correct: false,
        },
        {
          text: "Configurar exclusivamente la interfaz de usuario del proyecto.",
          correct: false,
        },
        {
          text: "Generar un token y configurar el pom.xml del proyecto.",
          correct: true,
        },
      ],
    },
    {
      question: "¿Qué ventaja tiene el uso de gráficos en JasperSoft?",
      options: [
        { text: "Facilitan la interpretación visual de datos.", correct: true },
        { text: "Mejoran el rendimiento del servidor.", correct: false },
        { text: "Reducen el tamaño del informe.", correct: false },
      ],
    },
    {
      question:
        "¿Qué ventaja ofrece la exportación de informes en formato PDF desde JasperSoft?",
      options: [
        { text: "Edición directa.", correct: false },
        { text: "Compatibilidad universal.", correct: true },
        { text: "Velocidad de generación.", correct: false },
      ],
    },
    {
      question: "¿Cuál es una característica de un manual de instalación?",
      options: [
        {
          text: "Detallar los atributos de las clases utilizadas en el desarrollo.",
          correct: false,
        },
        {
          text: "Proporcionar una sección de preguntas frecuentes.",
          correct: false,
        },
        {
          text: "Incluir normas de seguridad física y acceso a la información.",
          correct: true,
        },
      ],
    },
    {
      question:
        "¿Qué beneficio tiene el uso de UML en el desarrollo de software?",
      options: [
        {
          text: "Reducir el tamaño de los manuales de usuario.",
          correct: false,
        },
        { text: "Documentar visualmente sistemas complejos.", correct: true },
        { text: "Simplificar la edición de código fuente.", correct: false },
      ],
    },
    {
      question: "¿Qué ventaja tiene la instalación desde un servidor web?",
      options: [
        {
          text: "Garantiza que las aplicaciones siempre funcionen sin conexión.",
          correct: false,
        },
        {
          text: "Permite actualizaciones centralizadas y accesibilidad desde cualquier lugar.",
          correct: true,
        },
        {
          text: "Reduce la necesidad de pruebas de compatibilidad del software.",
          correct: false,
        },
      ],
    },
    {
      question: "¿Qué herramienta genera un instalador a partir de un JAR?",
      options: [
        { text: "Launch4j.", correct: true },
        { text: "LightShot.", correct: false },
        { text: "Eclipse.", correct: false },
      ],
    },
    {
      question:
        "¿Qué herramienta permite crear subinformes dentro de JasperSoft Studio?",
      options: [
        { text: "Report Builder.", correct: false },
        { text: "Subreport Wizard.", correct: true },
        { text: "Nested Reports.", correct: false },
      ],
    },
    {
      question:
        "¿Qué método se utiliza para importar un conector MySQL en JasperSoft?",
      options: [
        { text: "Add External Jars.", correct: true },
        { text: "Import JDBC.", correct: false },
        { text: "Load Connector.", correct: false },
      ],
    },
    {
      question:
        "¿Qué herramienta es adecuada para crear diagramas UML y es de código abierto?",
      options: [
        { text: "StarUML.", correct: true },
        { text: "Microsoft Visio.", correct: false },
        { text: "Draw.io.", correct: false },
      ],
    },
    {
      question:
        "¿Qué ventaja tiene un modelo cliente-servidor en la distribución de software?",
      options: [
        {
          text: "Permite ejecutar aplicaciones sin conexión a internet.",
          correct: false,
        },
        { text: "Simplifica la creación de paquetes MSI.", correct: false },
        {
          text: "Reduce los problemas asociados al sistema operativo.",
          correct: true,
        },
      ],
    },
    {
      question: "¿Qué es necesario para ejecutar un archivo JAR?",
      options: [
        { text: "Crear un paquete autoinstalable.", correct: false },
        {
          text: "Configurar las pruebas unitarias en el código.",
          correct: false,
        },
        { text: "Instalar el JRE en el sistema operativo.", correct: true },
      ],
    },
    {
      question:
        "¿Qué permite la prueba automatizada frente a la prueba manual?",
      options: [
        {
          text: "Reducir errores humanos y repetir pruebas de forma consistente.",
          correct: true,
        },
        {
          text: "Ejecutar pruebas más rápidas pero menos precisas.",
          correct: false,
        },
        {
          text: "Evitar la necesidad de diseñar casos de prueba.",
          correct: false,
        },
      ],
    },
    {
      question:
        "¿Qué comando en JasperSoft Studio permite agregar una nueva fuente de datos?",
      options: [
        { text: "Connect Data.", correct: false },
        { text: "Add Database.", correct: false },
        { text: "New Data Source.", correct: true },
      ],
    },
    {
      question:
        "¿Qué secciones de un informe permiten agregar encabezados y pies personalizados?",
      options: [
        { text: "Header and Footer.", correct: true },
        { text: "Title and Summary.", correct: false },
        { text: "Report Bands.", correct: false },
      ],
    },
    {
      question: "¿Qué es un índice en un documento?",
      options: [
        {
          text: "Una lista alfabética de palabras clave con sus páginas.",
          correct: true,
        },
        { text: "Un resumen de los capítulos principales.", correct: false },
        {
          text: "Un enlace directo a cada apartado del documento.",
          correct: false,
        },
      ],
    },
    {
      question:
        "¿Qué tipo de ayuda permite modificar el contenido sin cambiar el código fuente?",
      options: [
        {
          text: "Ayuda sensible al contexto con URLs flexibles.",
          correct: true,
        },
        { text: "Archivos PDF con enlaces internos.", correct: false },
        { text: "Ayuda basada en RTF.", correct: false },
      ],
    },
    {
      question: "¿Qué función cumple el asistente de instalación?",
      options: [
        { text: "Generar metadatos automáticamente.", correct: false },
        {
          text: "Orientar al usuario en el proceso paso a paso.",
          correct: true,
        },
        { text: "Ejecutar pruebas unitarias del software.", correct: false },
      ],
    },
    {
      question:
        "¿Qué herramienta es específica para pruebas unitarias en proyectos Java?",
      options: [
        { text: "Apache JMeter.", correct: false },
        { text: "JUnit.", correct: true },
        { text: "Bugzilla.", correct: false },
      ],
    },
    {
      question: "¿Qué función tiene el conector JDBC en JasperSoft?",
      options: [
        { text: "Crear informes dinámicos.", correct: false },
        { text: "Conectar a bases de datos.", correct: true },
        { text: "Ejecutar consultas SQL.", correct: false },
      ],
    },
    {
      question: "¿Cuál es el propósito principal de un manual de usuario?",
      options: [
        {
          text: "Facilitar el uso de la aplicación a usuarios no técnicos.",
          correct: true,
        },
        {
          text: "Documentar las pruebas realizadas en el software.",
          correct: false,
        },
        {
          text: "Proporcionar una referencia técnica para desarrolladores.",
          correct: false,
        },
      ],
    },
    {
      question: "¿Qué permite configurar Launch4j para aplicaciones Java?",
      options: [
        { text: "Diseñar interfaces gráficas interactivas.", correct: false },
        { text: "Crear scripts para instalación en Linux.", correct: false },
        {
          text: "Incluir el JRE en la misma carpeta que el ejecutable.",
          correct: true,
        },
      ],
    },
    {
      question:
        "¿Qué diferencia hay entre validación y verificación en las pruebas de software?",
      options: [
        {
          text: "No existe diferencia entre validación y verificación.",
          correct: false,
        },
        {
          text: "La verificación es subjetiva, mientras que la validación es técnica.",
          correct: false,
        },
        {
          text: "La validación asegura que el sistema hace lo que el cliente quiere, mientras que la verificación garantiza que funciona correctamente.",
          correct: true,
        },
      ],
    },
  ],
  empresa: [
    {
      question:
        "¿Cuál de las siguientes afirmaciones es correcta respecto a la inversión económica inicial de un autónomo?",
      options: [
        {
          text: "Debe aportar un capital mínimo de 3000 euros.",
          correct: false,
        },
        {
          text: "No requiere ninguna obligación legal en el aporte de cuantía inicial.",
          correct: true,
        },
        { text: "Debe aportar al menos 1000 euros.", correct: false },
      ],
    },
    {
      question:
        "¿Quiénes tienen la capacidad para tomar decisiones sobre la explotación económica, la continuidad, la cesión o la venta de una empresa?",
      options: [
        { text: "Los empleados.", correct: false },
        { text: "Los propietarios.", correct: true },
        { text: "Los clientes.", correct: false },
      ],
    },
    {
      question:
        "¿Por qué es importante realizar proyecciones de flujo de efectivo al elaborar un presupuesto empresarial?",
      options: [
        { text: "Para asegurar la previsión de ingresos.", correct: false },
        {
          text: "Para evaluar el impacto de los gastos variables.",
          correct: false,
        },
        {
          text: "Para gestionar adecuadamente la liquidez de la empresa.",
          correct: true,
        },
      ],
    },
    {
      question:
        "¿Qué aspecto determina principalmente la forma jurídica de una empresa?",
      options: [
        { text: "El tamaño de la oficina.", correct: false },
        {
          text: "La exigencia legal del país y la decisión de los propietarios.",
          correct: true,
        },
        { text: "El color del logo de la empresa.", correct: false },
      ],
    },
    {
      question:
        "¿Qué se debe solicitar en la Agencia Española de Administración Tributaria (AEAT) después de constituir la sociedad?",
      options: [
        { text: "Inscripción en el Registro Mercantil.", correct: false },
        { text: "Licencia de apertura.", correct: false },
        { text: "Número de Identificación Fiscal (NIF).", correct: true },
      ],
    },
    {
      question:
        "¿Dónde se debe depositar el capital social exigido para la constitución de la empresa?",
      options: [
        {
          text: "En una entidad bancaria a elección del emprendedor.",
          correct: true,
        },
        { text: "En una cuenta personal del emprendedor.", correct: false },
        { text: "En una cuenta de ahorros.", correct: false },
      ],
    },
    {
      question: "¿Qué tipo de impuesto no es aplicable a los autónomos?",
      options: [
        { text: "Impuesto de Sociedades.", correct: true },
        { text: "IVA.", correct: false },
        { text: "IRPF.", correct: false },
      ],
    },
    {
      question:
        "¿Qué instituciones suelen ofrecer préstamos con condiciones especiales para emprendedores?",
      options: [
        {
          text: "Organizaciones internacionales como el Banco Mundial.",
          correct: false,
        },
        { text: "Universidades y centros de investigación.", correct: false },
        {
          text: "Organismos oficiales como el Instituto de Crédito Oficial (ICO) y la Empresa Nacional de Innovación (ENISA).",
          correct: true,
        },
      ],
    },
    {
      question:
        "¿Qué objetivo principal persigue un plan de viabilidad en una empresa?",
      options: [
        { text: "Identificar oportunidades de mercado.", correct: false },
        {
          text: "Maximizar los rendimientos económicos a futuro.",
          correct: true,
        },
        { text: "Establecer la cultura empresarial.", correct: false },
      ],
    },
    {
      question:
        "El marco legal determina que los propietarios deben garantizar:",
      options: [
        { text: "Un entorno de trabajo seguro.", correct: true },
        { text: "Un aumento constante de salarios.", correct: false },
        {
          text: "La contratación de personal externo exclusivamente.",
          correct: false,
        },
      ],
    },
    {
      question:
        "¿Cuál es el siguiente paso después de determinar la forma jurídica de la empresa?",
      options: [
        { text: "Inscripción en el Registro de la Propiedad.", correct: false },
        {
          text: "Obtención del certificado de actividad económica.",
          correct: false,
        },
        {
          text: "Obtención de la certificación negativa del Registro Mercantil.",
          correct: true,
        },
      ],
    },
    {
      question:
        "¿Cuál es la responsabilidad de los socios en una Sociedad Colectiva?",
      options: [
        { text: "Limitada a su aportación de capital.", correct: false },
        { text: "Ilimitada.", correct: true },
        { text: "Solo con el capital social de la empresa.", correct: false },
      ],
    },
    {
      question:
        "¿Qué elemento es fundamental al elegir la forma jurídica de una empresa respecto a las responsabilidades del propietario?",
      options: [
        { text: "El tiempo de vacaciones del propietario.", correct: false },
        {
          text: "La responsabilidad patrimonial y legal del propietario.",
          correct: true,
        },
        { text: "El número de empleados en la empresa.", correct: false },
      ],
    },
    {
      question: "¿Qué derechos tienen los socios de una Sociedad Anónima?",
      options: [
        { text: "Derecho a la gestión directa de la empresa.", correct: false },
        { text: "Derecho a recibir salarios de la empresa.", correct: false },
        {
          text: "Participación en el reparto de beneficios y en el patrimonio de la liquidación.",
          correct: true,
        },
      ],
    },
    {
      question: "En una sociedad limitada, los propietarios responden por:",
      options: [
        { text: "El capital social aportado.", correct: true },
        { text: "Todo su patrimonio personal.", correct: false },
        { text: "Los ingresos anuales de la empresa.", correct: false },
      ],
    },
    {
      question:
        "¿Qué papel juega el control periódico del presupuesto en la gestión financiera de la empresa?",
      options: [
        {
          text: "Asegurar la obtención de financiamiento externo.",
          correct: false,
        },
        {
          text: "Identificar y corregir desviaciones respecto a lo planificado.",
          correct: true,
        },
        {
          text: "Establecer metas a largo plazo para la empresa.",
          correct: false,
        },
      ],
    },
    {
      question:
        "¿Cuál de las siguientes opciones describe mejor las subvenciones a fondo perdido?",
      options: [
        {
          text: "Son ayudas económicas que deben ser devueltas en su totalidad.",
          correct: false,
        },
        {
          text: "No generan obligación de devolución, pero deben destinarse a una inversión específica.",
          correct: true,
        },
        { text: "Se conceden a Startups exclusivamente.", correct: false },
      ],
    },
    {
      question:
        "En una Sociedad Comanditaria, los socios comanditarios tienen una responsabilidad:",
      options: [
        { text: "Ilimitada.", correct: false },
        { text: "Limitada a su aportación de capital.", correct: true },
        { text: "Solidaria con los socios colectivos.", correct: false },
      ],
    },
    {
      question:
        "¿Qué documento se debe obtener para verificar la exclusividad del nombre de la empresa antes de su constitución?",
      options: [
        { text: "Certificación negativa del Registro Civil.", correct: false },
        {
          text: "Certificación negativa del Registro Mercantil.",
          correct: true,
        },
        { text: "Certificación negativa del Ayuntamiento.", correct: false },
      ],
    },
    {
      question:
        "Una de las responsabilidades de los propietarios de una empresa es:",
      options: [
        { text: "La gestión de recursos humanos externos.", correct: false },
        {
          text: "La protección de la propiedad intelectual de la empresa.",
          correct: true,
        },
        { text: "La supervisión del mercado de competencia.", correct: false },
      ],
    },
    {
      question:
        "¿Qué tipo de análisis financiero permite evaluar la distribución equitativa de activos en un solo periodo?",
      options: [
        { text: "Análisis horizontal.", correct: false },
        { text: "Análisis vertical.", correct: true },
        { text: "Análisis de flujos.", correct: false },
      ],
    },
    {
      question: "¿Qué representa el grupo 7 del Plan General de Contabilidad?",
      options: [
        { text: "Compras y gastos.", correct: false },
        { text: "Ventas e ingresos.", correct: true },
        { text: "Activos no corrientes.", correct: false },
      ],
    },
    {
      question:
        "¿Qué análisis compara los estados financieros entre diferentes periodos?",
      options: [
        { text: "Análisis de resultados.", correct: false },
        { text: "Análisis horizontal.", correct: true },
        { text: "Análisis vertical.", correct: false },
      ],
    },
    {
      question:
        "¿Qué norma regula las obligaciones tributarias de las sociedades limitadas en España?",
      options: [
        { text: "La Ley de Sociedades de Capital.", correct: true },
        { text: "El Plan General de Contabilidad.", correct: false },
        { text: "El Estatuto de los Trabajadores.", correct: false },
      ],
    },
    {
      question:
        "¿Cuál es un factor clave en la clasificación de grupos profesionales en un convenio colectivo?",
      options: [
        { text: "El nivel de titulación.", correct: false },
        { text: "Las funciones del puesto.", correct: true },
        { text: "La experiencia profesional.", correct: false },
      ],
    },
    {
      question: "¿Qué relación indica una línea vertical en un organigrama?",
      options: [
        { text: "Relación jerárquica.", correct: true },
        { text: "Relación funcional.", correct: false },
        { text: "Relación entre iguales.", correct: false },
      ],
    },
    {
      question:
        "¿Cuál es el documento contable que muestra la situación económica-financiera de la empresa?",
      options: [
        { text: "Cuenta de pérdidas y ganancias.", correct: false },
        { text: "Balance de situación.", correct: true },
        { text: "Estado de flujos de efectivo.", correct: false },
      ],
    },
    {
      question:
        "¿Qué documento contable es obligatorio y registra las operaciones día a día?",
      options: [
        { text: "El libro mayor.", correct: false },
        { text: "El libro diario.", correct: true },
        { text: "El balance de situación.", correct: false },
      ],
    },
    {
      question:
        "¿Qué tipo de empresa debe presentar mensualmente las declaraciones tributarias?",
      options: [
        { text: "Microempresa.", correct: false },
        { text: "Gran empresa.", correct: true },
        { text: "Sociedad civil.", correct: false },
      ],
    },
    {
      question:
        "¿Qué categoría de cuentas contables incluye el inmovilizado material?",
      options: [
        { text: "Grupo 1, Financiación básica.", correct: false },
        { text: "Grupo 4, Acreedores y Deudores.", correct: false },
        { text: "Grupo 2, Activo no corriente.", correct: true },
      ],
    },
    {
      question: "¿Qué objetivo tiene el control en la gestión administrativa?",
      options: [
        { text: "Definir objetivos estratégicos.", correct: false },
        {
          text: "Verificar cumplimiento y corregir desviaciones.",
          correct: true,
        },
        { text: "Planificar recursos humanos.", correct: false },
      ],
    },
    {
      question:
        "¿Qué es obligatorio presentar al dar de baja una actividad empresarial?",
      options: [
        { text: "Modelo 036 o 037.", correct: true },
        { text: "Modelo 130 o 131.", correct: false },
        { text: "Modelo 111.", correct: false },
      ],
    },
    {
      question: "¿Qué permite el análisis horizontal?",
      options: [
        { text: "Estudiar un solo periodo financiero.", correct: false },
        { text: "Comparar cambios entre varios periodos.", correct: true },
        { text: "Evaluar riesgos financieros.", correct: false },
      ],
    },
    {
      question:
        "¿Qué se utiliza para registrar operaciones en orden cronológico?",
      options: [
        { text: "El libro mayor.", correct: false },
        { text: "El libro diario.", correct: true },
        { text: "El estado de flujos de efectivo.", correct: false },
      ],
    },
    {
      question: "¿Qué distingue a los convenios colectivos de empresa?",
      options: [
        { text: "Aplican condiciones sectoriales.", correct: false },
        { text: "Mejoran condiciones de convenios superiores.", correct: true },
        { text: "Se publican en el BOE.", correct: false },
      ],
    },
    {
      question: "¿Qué normativa regula las sociedades de capital en España?",
      options: [
        { text: "El Código de Comercio.", correct: false },
        { text: "La Ley de Sociedades de Capital.", correct: true },
        { text: "El Plan General de Contabilidad.", correct: false },
      ],
    },
    {
      question:
        "¿Qué establece una jerarquía de necesidades humanas según Maslow?",
      options: [
        { text: "Los niveles de satisfacción personal.", correct: true },
        { text: "La estructura organizativa de una empresa.", correct: false },
        { text: "La clasificación profesional.", correct: false },
      ],
    },
    {
      question: "¿Qué recoge el libro de inventarios y cuentas anuales?",
      options: [
        { text: "Operaciones diarias.", correct: false },
        { text: "Cuentas de resultados y balances.", correct: true },
        { text: "Transacciones del día a día.", correct: false },
      ],
    },
    {
      question: "¿Qué incluye el grupo 6 de cuentas contables?",
      options: [
        { text: "Ventas e ingresos.", correct: false },
        { text: "Compras y gastos.", correct: true },
        { text: "Activos no corrientes.", correct: false },
      ],
    },
    {
      question:
        "¿Qué recurso identifica las necesidades de personal en una empresa?",
      options: [
        { text: "El análisis DAFO.", correct: false },
        { text: "El organigrama.", correct: true },
        { text: "El balance de situación.", correct: false },
      ],
    },
    {
      question:
        "¿Qué tipo de empresa debe adoptar obligatoriamente una forma jurídica determinada, como sociedad mercantil?",
      options: [
        { text: "Empresas de servicios.", correct: false },
        { text: "Empresas de manufactura.", correct: false },
        { text: "Empresas de seguros.", correct: true },
      ],
    },
    {
      question:
        "¿Qué responsabilidad no asumen los propietarios de una sociedad anónima?",
      options: [
        {
          text: "Responder personalmente con su patrimonio civil.",
          correct: true,
        },
        { text: "Determinar los objetivos empresariales.", correct: false },
        {
          text: "Establecer los procesos y controles internos.",
          correct: false,
        },
      ],
    },
    {
      question:
        "En relación con la fiscalidad de una empresa, ¿qué factor se ve influenciado por la elección de la forma jurídica?",
      options: [
        { text: "La ubicación de la oficina.", correct: false },
        { text: "Las obligaciones tributarias de la empresa.", correct: true },
        { text: "Los horarios de apertura de la empresa.", correct: false },
      ],
    },
    {
      question:
        "¿Qué herramienta de gestión mide el cumplimiento de los objetivos planificados en una empresa?",
      options: [
        { text: "La planificación estratégica.", correct: false },
        { text: "El organigrama funcional.", correct: false },
        { text: "El control administrativo.", correct: true },
      ],
    },
    {
      question: "¿Cuál es una ventaja de la estructura organizativa lineal?",
      options: [
        { text: "Fomenta la especialización.", correct: false },
        { text: "Es fácil de implantar.", correct: true },
        { text: "Facilita la comunicación interna.", correct: false },
      ],
    },
    {
      question:
        "¿Qué documento complementa la información del balance de situación y las pérdidas y ganancias?",
      options: [
        { text: "La memoria.", correct: true },
        { text: "El estado de flujos de efectivo.", correct: false },
        { text: "El libro mayor.", correct: false },
      ],
    },
    {
      question: "¿Qué describe mejor una estructura organizativa funcional?",
      options: [
        { text: "Relaciones jerárquicas rígidas.", correct: false },
        { text: "Descentralización y especialización.", correct: true },
        { text: "Poca flexibilidad ante cambios.", correct: false },
      ],
    },
    {
      question: "¿Qué refleja un estado de flujos de efectivo?",
      options: [
        { text: "Variaciones en el patrimonio neto.", correct: false },
        { text: "Tesorería obtenida y aplicada.", correct: true },
        { text: "Resultados contables.", correct: false },
      ],
    },
    {
      question:
        "¿Qué documento contable incluye el estado total de cambios en el patrimonio neto?",
      options: [
        { text: "El Balance de Situación.", correct: false },
        { text: "La Memoria.", correct: false },
        { text: "Las Cuentas Anuales.", correct: true },
      ],
    },
    {
      question: "¿Qué analiza un estado de cambios en el patrimonio neto?",
      options: [
        { text: "La evolución de los activos fijos.", correct: false },
        { text: "Las variaciones en el patrimonio neto.", correct: true },
        { text: "Las ganancias del periodo.", correct: false },
      ],
    },
    {
      question: "¿Qué factor no pertenece al coste de personal?",
      options: [
        { text: "Salarios y sueldos.", correct: false },
        { text: "Incentivos fiscales.", correct: true },
        { text: "Cotizaciones sociales.", correct: false },
      ],
    },
    {
      question:
        "¿Qué herramienta analiza la distribución porcentual de los activos en un solo periodo?",
      options: [
        { text: "Análisis vertical.", correct: true },
        { text: "Análisis horizontal.", correct: false },
        { text: "Estado de cambios en el patrimonio neto.", correct: false },
      ],
    },
    {
      question:
        "La función que permite verificar si una empresa ha alcanzado sus objetivos es:",
      options: [
        { text: "Planificación.", correct: false },
        { text: "Control.", correct: true },
        { text: "Dirección.", correct: false },
      ],
    },
  ],

  ingles: [
    {
      question: "I would love ___ for dinner tonight",
      options: [
        { text: "go", correct: false },
        { text: "to go out", correct: true },
        { text: "going", correct: false },
      ],
    },
    {
      question: "I would hate ____the summer in Seville",
      options: [
        { text: "sppending", correct: false },
        { text: "to spend", correct: true },
        { text: "spending", correct: false },
      ],
    },
    {
      question:
        "Selecciona la palabra que se corresponde con el fonema semivocálico /w/",
      options: [
        { text: "Quiet", correct: false },
        { text: "Wool", correct: true },
        { text: "Ambas son correctas", correct: false },
      ],
    },
    {
      question:
        'Selecciona el sonido semiconsonántico que se corresponde con la palabra "jale"',
      options: [
        { text: "Ninguna es correcta", correct: false },
        { text: "/j/", correct: true },
      ],
    },
    {
      question: "You____smoke here. It is forbidden.",
      options: [
        { text: "can", correct: false },
        { text: "can't", correct: true },
        { text: "should", correct: false },
      ],
    },
    {
      question: "You_____study harder if you want to pass the exam.",
      options: [
        { text: "should", correct: true },
        { text: "would", correct: false },
        { text: "can't", correct: false },
      ],
    },
    {
      question: "Formal letters are used for:",
      options: [
        { text: "Both are correct", correct: false },
        { text: "formal communications", correct: true },
        {
          text: "personal communications with friends or relatives",
          correct: false,
        },
      ],
    },
    {
      question: "I like ___ my homework on Sunday mornings",
      options: [
        { text: "to do", correct: false },
        { text: "Ambas son correctas", correct: true },
        { text: "doing", correct: false },
      ],
    },
    {
      question: "I _____call my teacher, I have a huge doubt",
      options: [
        { text: "should to", correct: false },
        { text: "have to", correct: true },
        { text: "has to", correct: false },
      ],
    },
    {
      question: "That restaurant ___ be very good. It's always empty.",
      options: [
        { text: "have to", correct: false },
        { text: "can't", correct: true },
        { text: "must", correct: false },
      ],
    },
    {
      question: "If we miss the plane, we ______ by bus",
      options: [
        { text: "might be", correct: false },
        { text: "Will go", correct: true },
        { text: "had to go", correct: false },
      ],
    },
    {
      question: "He answered the ___ when it was ringing.",
      options: [
        { text: "scanner", correct: false },
        { text: "television", correct: false },
        { text: "Phone", correct: true },
      ],
    },
    {
      question:
        "Rachel exchanged her old laptop for a ___; it was much easier to carry around.",
      options: [
        { text: "television", correct: false },
        { text: "fuse", correct: false },
        { text: "Tablet", correct: true },
      ],
    },
    {
      question: "If I______you, I would talk to her.",
      options: [
        { text: "was", correct: false },
        { text: "were", correct: true },
        { text: "has", correct: false },
      ],
    },
    {
      question: "I am plugging my ¬¬¬___ into an outlet to charge it.",
      options: [
        { text: "Laptop", correct: true },
        { text: "fuse", correct: false },
        { text: "television", correct: false },
      ],
    },
    {
      question: "If Peter ______ more, he would have passed the exam.",
      options: [
        { text: "has study", correct: false },
        { text: "had studied", correct: false },
        { text: "Had studied", correct: true },
      ],
    },
    {
      question:
        "¿Cuál de las siguientes palabras se pronuncia con el sonido consonántico /t/?",
      options: [
        { text: "thefts", correct: false },
        { text: "tea", correct: true },
        { text: "the", correct: false },
      ],
    },
    {
      question: "If you_____me, I would_____it",
      options: [
        { text: "had asked/have done", correct: true },
        { text: "ask/had", correct: false },
        { text: "asked/has", correct: false },
      ],
    },
    {
      question: "The sound “B” is very similar to:",
      options: [
        { text: "V", correct: false },
        { text: "F", correct: false },
        { text: "P", correct: true },
      ],
    },
    {
      question: "I need a ___ to recharge my phone's battery.",
      options: [
        { text: "Plug", correct: true },
        { text: "toaster", correct: false },
        { text: "Ninguna es correcta", correct: false },
      ],
    },
    {
      question: "En la lengua inglesa existen palabras homógrafas, que son:",
      options: [
        {
          text: "Palabras que se escriben del mismo modo pero cuyos significados son distintos.",
          correct: true,
        },
        {
          text: "Palabras que, teniendo los mismos grafemas, sus significantes son distintos, pero su significado es el mismo.",
          correct: false,
        },
        {
          text: "Palabras que, teniendo distintos grafemas, sus significantes son iguales, y por supuesto, su significado también.",
          correct: false,
        },
      ],
    },
    {
      question: "Direct Style: “Could you explain number four, please?”",
      options: [
        {
          text: "Indirect Style:She claim me if I please could explain number four",
          correct: false,
        },
        {
          text: "Indirect Style:She asked me if I please could explain number four",
          correct: true,
        },
        {
          text: "Indirect Style:She ordered if I please could explain number four",
          correct: false,
        },
      ],
    },
    {
      question: "When you switch your tablet ___, you see a red light.",
      options: [
        { text: "with", correct: false },
        { text: "up", correct: false },
        { text: "On.", correct: true },
      ],
    },
    {
      question: 'Indica cual de las siguientes palabras es homófona de "marry"',
      options: [
        { text: "merry", correct: true },
        { text: "Mary", correct: false },
        { text: "married", correct: false },
      ],
    },
    {
      question: "The property has large terraces, ___ to a solarium.",
      options: [
        { text: "in addition", correct: true },
        { text: "moreover", correct: false },
        { text: "also", correct: false },
      ],
    },
    {
      question: "Direct Style: “I’m leaving tomorrow”",
      options: [
        {
          text: "Indirect Style:She said that she was leaving the following day",
          correct: true,
        },
        {
          text: "Indirect Style:She said me that she was leaving the following day",
          correct: false,
        },
        { text: "Indirect Style:She said she was leaving today.", correct: false },
      ],
    },
    {
      question:
        "Direct Style: “We went to the cinema and then to a Chinese restaurant”",
      options: [
        {
          text: "Indirect Style:She said that they had gone to the cinema and then to a Chinese restaurant.",
          correct: true,
        },
        {
          text: "Indirect Style:She said that they gone to the cinema and then to a Chinese restaurant.",
          correct: false,
        },
        {
          text: "Indirect Style:She ordered that they gone to the cinema and then to a Chinese restaurant.",
          correct: false,
        },
      ],
    },
    {
      question: "Direct Style: “Please get me a cup of tea”",
      options: [
        { text: "She asked me to get her a cup of tea.", correct: true },
        { text: "Indirect Style:She asked me get her a cup of tea.", correct: false },
        { text: "Indirect Style:She asked to please get her a cup of tea.", correct: false },
      ],
    },
    {
      question: "Click on print and your document should come out of the ___.",
      options: [
        { text: "Mouse", correct: false },
        { text: "Printer", correct: true },
        { text: "Ninguna es correcta.", correct: false },
      ],
    },
    {
      question: "Direct Style: “Don’t do it!”",
      options: [
        { text: "Indirect Style:She told me do it", correct: false },
        { text: "Indirect Style:She told me to do it.", correct: false },
        { text: "Indirect Style:She ordered me not to do it.", correct: true },
      ],
    },
    {
      question: "Check your inbox; I just sent you an important ___.",
      options: [
        { text: "inbox", correct: false },
        { text: "email", correct: true },
        { text: "password", correct: false },
      ],
    },
    {
      question: "I have ___my work to this email.",
      options: [
        { text: "email", correct: false },
        { text: "attached", correct: true },
        { text: "inbox", correct: false },
      ],
    },
    {
      question: "Check your ___; I just sent you an important email",
      options: [
        { text: "password", correct: false },
        { text: "inbox", correct: true },
        { text: "username", correct: false },
      ],
    },
    {
      question: "Elsa is not here and, ___, she can say nothing",
      options: [
        { text: "and", correct: false },
        { text: "but", correct: false },
        { text: "consequently", correct: true },
      ],
    },
    {
      question: '"I am writing____relation____the job vacancy"',
      options: [
        { text: "to/at", correct: false },
        { text: "on/with", correct: false },
        { text: "in/to", correct: true },
      ],
    },
    {
      question: "Spanish: Estoy harto de mi jefe",
      options: [
        { text: "I am fed up with my boss.", correct: true },
        { text: "I am hungry from my boss.", correct: false },
        { text: "I am upset to my boss.", correct: false },
      ],
    },
    {
      question: "Es una característica del inglés americano:",
      options: [
        {
          text: "los verbos irregulares no pueden convertirse en regulares ni si quiera por el uso del habla",
          correct: false,
        },
        {
          text: "haber convertido los pasados de los verbos irregulares en regulares",
          correct: true,
        },
        {
          text: "pronunciar el sonido consonántico /f/ de manera diferente",
          correct: false,
        },
      ],
    },
    {
      question: "Spanish: Ella está casada con un periodista famoso",
      options: [
        { text: "She is married with a famous journalist", correct: false },
        { text: "She is married at a famous journalist", correct: false },
        { text: "She is married to a famous journalist.", correct: true },
      ],
    },
    {
      question: "El inglés americano tiende a:",
      options: [
        { text: "No tener diptongos", correct: false },
        {
          text: "no doblar consonantes en los casos en los que el inglés británico las dobla",
          correct: true,
        },
        {
          text: "No escribir con mayúsculas al inicio de las oraciones.",
          correct: false,
        },
      ],
    },
    {
      question:
        '"I am writing to complain_____the poor service I have received_____your sales assistant"',
      options: [
        { text: "for/from", correct: false },
        { text: "to/at", correct: false },
        { text: "about/from", correct: true },
      ],
    },
    {
      question:
        "Selecciona la palabra que se corresponde con el fonema semivocálico /j/",
      options: [
        { text: "Ambas son correctas", correct: true },
        { text: "Jail", correct: false },
        { text: "Yale", correct: false },
      ],
    },
    {
      question: "You've been travelling all day. You ___ be very tired",
      options: [
        { text: "can't", correct: false },
        { text: "must", correct: true },
        { text: "couldn't", correct: false },
      ],
    },
    {
      question:
        "___ rumors I've heard, he was fired for stealing from the company.",
      options: [
        { text: "According to", correct: true },
        { text: "For instance", correct: false },
        { text: "For example", correct: false },
      ],
    },
    {
      question: "I hate ____ my bedroom",
      options: [
        { text: "tiding", correct: false },
        { text: "to tidy", correct: false },
        { text: "tidying", correct: true },
      ],
    },
    {
      question: "I love____clothes on sales",
      options: [
        { text: "buying", correct: true },
        { text: "buing", correct: false },
        { text: "to buy", correct: false },
      ],
    },
    {
      question: "When does schwa sound occurs?",
      options: [
        { text: "only reduced vowel sound of function words", correct: false },
        {
          text: "only unstressed syllables in multi-syllable words",
          correct: false,
        },
        {
          text: "Unstressed syllables in multi-syllable words and reduced vowel sound of function words",
          correct: true,
        },
      ],
    },
    {
      question: "If I_____you, I would go to the party.",
      options: [
        { text: "had", correct: false },
        { text: "was", correct: false },
        { text: "were", correct: true },
      ],
    },
    {
      question: "An essay is_",
      options: [
        {
          text: "to explain, in a detailed way, what people, places or objects are like",
          correct: false,
        },
        {
          text: "a spoken conversation that includes at least two characters",
          correct: false,
        },
        {
          text: "a short, formal piece of writing that deals with a single topic.",
          correct: true,
        },
      ],
    },
    {
      question: "If Anna were taller, she _____ heels so much.",
      options: [
        { text: "Wouldn’t wear", correct: true },
        { text: "have to wear", correct: false },
        { text: "must wear", correct: false },
      ],
    },
    {
      question: "If I ______the lottery, I would travel around the world.",
      options: [
        { text: "won", correct: true },
        { text: "win", correct: false },
        { text: "would win", correct: false },
      ],
    },
    {
      question: "I studied for the exam, ___ I don't think I did well.",
      options: [
        { text: "likewise", correct: false },
        { text: "but", correct: true },
        { text: "except", correct: false },
      ],
    },
    {
      question: "I have made a digital copy of the document using a ___.",
      options: [
        { text: "Hairdryer", correct: false },
        { text: "Scanner", correct: true },
        { text: "Plug", correct: false },
      ],
    },
    {
      question: "Everybody looked at the ___ as the movie started.",
      options: [
        { text: "Mouse", correct: false },
        { text: "Screen.", correct: true },
        { text: "Database", correct: false },
      ],
    },
    {
      question: "The dialogue is",
      options: [
        {
          text: "to explain, in a detailed way, what people, places or objects are like",
          correct: false,
        },
        {
          text: "a short, formal piece of writing that deals with a single topic.",
          correct: false,
        },
        {
          text: "a spoken conversation that includes at least two characters",
          correct: true,
        },
      ],
    },
    {
      question: "Direct Style: “Where do you live?”",
      options: [
        { text: "Indirect Style:She said me where I lived.", correct: false },
        { text: "Indirect Style:She asked me where I lived.", correct: true },
        { text: "Indirect Style:She said me if I lived", correct: false },
      ],
    },
    {
      question: "It was getting dark, so Ann ___ the light on.",
      options: [
        { text: "Ninguna es correcta.", correct: false },
        { text: "Off", correct: false },
        { text: "Switched.", correct: true },
      ],
    },
    {
      question: "Direct Style: “I’ll come and help you at twelve”",
      options: [
        {
          text: "Indirect Style:She told me that she came and help me at twelve that day.",
          correct: false,
        },
        {
          text: "Indirect Style:She said me that she came and help me at twelve that day.",
          correct: false,
        },
        {
          text: "Indirect Style:She told me that she would come and help me at twelve that day.",
          correct: true,
        },
      ],
    },
    {
      question:
        "Una de las principales diferencias entre el inglés británico y el inglés americano es:",
      options: [
        {
          text: "las diferencias en la pronunciación de las semivocales.",
          correct: true,
        },
        {
          text: "las diferencias en la pronunciación del sonido consonántico /v/",
          correct: false,
        },
        {
          text: "no existen diferentes en el aspecto de la pronunciación de las semivocales.",
          correct: false,
        },
      ],
    },
    {
      question: "But ____ the life in Paris is pleasant and relaxed.",
      options: [
        { text: "but", correct: false },
        { text: "apart from that", correct: true },
        { text: "likewise", correct: false },
      ],
    },
    {
      question: "Spanish: Estoy muy unida a mi hermana",
      options: [
        { text: "I am very close to my sister", correct: true },
        { text: "I am very near to my sister", correct: false },
        { text: "I am very near with my sister", correct: false },
      ],
    },
    {
      question: "My brother bought a new car last week",
      options: [
        { text: "A new car buy my brother", correct: false },
        {
          text: "A new car was bought by my brother last week.",
          correct: true,
        },
        { text: "A new car bought my brother", correct: false },
      ],
    },
    {
      question:
        "Countries ____United States and Russia have competed in the past.",
      options: [
        { text: "for example", correct: false },
        { text: "such as", correct: true },
        { text: "for instance", correct: false },
      ],
    },
    {
      question: "He likes______early in the morning.",
      options: [
        { text: "get up", correct: false },
        { text: "getting up", correct: true },
        { text: "geting up", correct: false },
      ],
    },
    {
      question: "He_____ be at the office, he starts at half past nine",
      options: [
        { text: "to", correct: false },
        { text: "will", correct: false },
        { text: "must", correct: true },
      ],
    },
    {
      question:
        "¿Cuál de las siguientes palabras se pronuncia con el sonido consonántico /k/?",
      options: [
        { text: "cake", correct: false },
        { text: "quiz", correct: false },
        { text: "Ambas son correctas", correct: true },
      ],
    },
    {
      question: "He___inthe television and switched it on.",
      options: [
        { text: "Ambas son correctas", correct: false },
        { text: "Plugged", correct: true },
        { text: "switched", correct: false },
      ],
    },
    {
      question: 'Indica cual de las siguientes palabras es homófona de "hear"',
      options: [
        { text: "this", correct: false },
        { text: "here", correct: true },
        { text: "there", correct: false },
      ],
    },
    {
      question: "Laura works in a shop ___ in a factory.",
      options: [
        { text: "but", correct: false },
        { text: "as well as", correct: true },
        { text: "in addition", correct: false },
      ],
    },
    {
      question:
        "En cuanto al cambio en la escritura de los finales de palabras, podemos decir que:",
      options: [
        {
          text: 'palabras que en inglés británico acaban en "-tre" el inglés americano las acaba en "-ter"',
          correct: true,
        },
        { text: "En inglés americano no existe el fonema /z/", correct: false },
        {
          text: 'en inglés americano no se pronuncian las "eses" del final de las palabras.',
          correct: false,
        },
      ],
    },
    {
      question: "Short stories are:",
      options: [
        {
          text: "a spoken conversation that includes at least two characters",
          correct: false,
        },
        {
          text: "extremely short narratives that deal with a single topic",
          correct: true,
        },
        {
          text: "a short, formal piece of writing that deals with a single topic.",
          correct: false,
        },
      ],
    },
    {
      question:
        'Selecciona el sonido semiconsonántico que se corresponde con la palabra "you"',
      options: [
        { text: "/w/", correct: false },
        { text: "/j/", correct: true },
        { text: "Ninguna es correcta.", correct: false },
      ],
    },
    {
      question: "When I was fifteen, I_____run for an hour without stopping.",
      options: [
        { text: "can", correct: false },
        { text: "will", correct: false },
        { text: "could", correct: true },
      ],
    },
    {
      question:
        "I _____be studying the whole weekend. I’ve got an exam next Monday",
      options: [
        { text: "will", correct: true },
        { text: "would", correct: false },
        { text: "going", correct: false },
      ],
    },
    {
      question: "If he ______better English, he would move to London.",
      options: [
        { text: "Spoke", correct: true },
        { text: "speaks", correct: false },
        { text: "speak", correct: false },
      ],
    },
    {
      question: "Nothing has changed ___ my place of residence",
      options: [
        { text: "except", correct: true },
        { text: "likewise", correct: false },
        { text: "however", correct: false },
      ],
    },
    {
      question:
        "¿Cuál de las siguientes palabras se pronuncia con el sonido consonántico /h/?",
      options: [
        { text: "children", correct: false },
        { text: "chat", correct: false },
        { text: "house", correct: true },
      ],
    },
    {
      question: "En la lengua inglesa existen palabras homófonas, que son …",
      options: [
        {
          text: "son palabras que se escriben y tienen significados diferentes, pero suenan igual.",
          correct: true,
        },
        {
          text: "Palabras que, teniendo distintos grafemas, sus significantes son iguales, y por supuesto, su significado también.",
          correct: false,
        },
        {
          text: "Palabras que, teniendo los mismos grafemas, sus significantes son distintos, pero su significado es el mismo.",
          correct: false,
        },
      ],
    },
    {
      question: 'Indica cual de las siguientes palabras es homófona de "ate"',
      options: [
        { text: "eaten", correct: false },
        { text: "eat", correct: false },
        { text: "eight", correct: true },
      ],
    },
    {
      question: "Direct Style: “She got married last year”",
      options: [
        { text: "Indirect Style:She said she was married the previous year.", correct: false },
        {
          text: "Indirect Style:She said me that she had got married the previous year.",
          correct: false,
        },
        {
          text: "Indirect Style:She told me that she had got married the previous year.",
          correct: true,
        },
      ],
    },
    {
      question: "Direct Style: “Be quick!”",
      options: [
        { text: "She said me to be quick.", correct: false },
        { text: "She ordered me to be quick.", correct: true },
        { text: "She ordered me be quick.", correct: false },
      ],
    },
    {
      question:
        "_______ to the administrator account that you will use to reset the forgotten password.",
      options: [
        { text: "reply", correct: false },
        { text: "password", correct: false },
        { text: "log on", correct: true },
      ],
    },
    {
      question: "Choose the correct form:",
      options: [
        { text: "on summer", correct: false },
        { text: "at summer.", correct: false },
        { text: "in summer", correct: true },
      ],
    },
    {
      question: "The user entered an invalid ___.",
      options: [
        { text: "reply", correct: false },
        { text: "password", correct: true },
        { text: "log on", correct: false },
      ],
    },
    {
      question: "Spanish: Sharon está muy contenta con su nuevo móvil",
      options: [
        {
          text: "Sharon is very pleased with her new mobile.",
          correct: true,
        },
        {
          text: "Sharon is very happy to her new mobile.",
          correct: false,
        },
        {
          text: "Sharon is very pleased for her new mobile.",
          correct: false,
        },
      ],
    },
    {
      question: "What is one official language in India?",
      options: [
        { text: "Both are incorrect", correct: false },
        { text: "French is the official language in India", correct: false },
        { text: "English is an official language in India.", correct: true },
      ],
    },
    {
      question: "_______you_____ to the park if it doesn’t rain?",
      options: [
        { text: "Did/go", correct: false },
        { text: "Will / go", correct: true },
        { text: "Might/went", correct: false },
      ],
    },
    {
      question: "The passive voice is used to",
      options: [
        { text: "Both are correct", correct: false },
        { text: "give more importance to the object.", correct: true },
        { text: "give more importance to the subject.", correct: false },
      ],
    },
  ],
  progr_serv_proces: [
    {
      question: "Indica la librería que permite trabajar con sockets en Java:",
      options: [
        { text: "java.sockets.*", correct: false },
        { text: "java.net.*", correct: true },
        { text: "java.networking.*", correct: false },
      ],
    },
    {
      question: "Un puerto nos permite:",
      options: [
        {
          text: "Identificar de manera única un equipo en la red",
          correct: false,
        },
        {
          text: "Identificar una aplicación a la que van dirigidos los datos dentro de un equipo",
          correct: true,
        },
        { text: "Identificar de manera única una aplicación", correct: false },
      ],
    },
    {
      question:
        "¿En el modelo cliente/servidor, dónde se ubica la interfaz gráfica del sistema?:",
      options: [
        { text: "Cliente", correct: true },
        { text: "Servidor", correct: false },
        { text: "Tanto en el cliente como en el servidor", correct: false },
      ],
    },
    {
      question:
        "El protocolo de la capa de transporte orientado a la conexión es:",
      options: [
        { text: "UDP", correct: false },
        { text: "TCP", correct: true },
        { text: "FTP", correct: false },
      ],
    },
    {
      question:
        "Los servicios de red que incluyen las aplicaciones de red necesarias para almacenar y recuperar datos de archivos:",
      options: [
        { text: "Son los servicios de archivo", correct: true },
        { text: "Son los servicios públicos", correct: false },
        { text: "Son los servicios de mensajería", correct: false },
      ],
    },
    {
      question: "Telnet:",
      options: [
        {
          text: "Es un servicio que permite descargar y subir archivos entre un cliente y un servidor",
          correct: false,
        },
        {
          text: "Es un protocolo que se utiliza para transferir información entre clientes web y servidores web",
          correct: false,
        },
        {
          text: "Es un servicio que ofrece la dirección IP de un sitio web o nombre de dominio para que un host pueda conectarse a éste.",
          correct: true,
        },
      ],
    },
    {
      question:
        "¿Qué protocolo es utilizado para transferir archivos entre sistemas:",
      options: [
        { text: "TELNET", correct: false },
        { text: "HTTP", correct: false },
        { text: "FTP", correct: true },
      ],
    },
    {
      question:
        "En la capa de aplicación sobresalen por encima de los demás los servicios:",
      options: [
        {
          text: "Públicos (PPP), privados (PRP) y semipúblicos (SMTP)",
          correct: false,
        },
        { text: "HTTP, POP3 y ROCK3", correct: false },
        { text: "FTP, correo y web", correct: true },
      ],
    },
    {
      question: "La clase java.net.Socket:",
      options: [
        { text: "Representa un socket", correct: true },
        {
          text: "Es un protocolo que se utiliza para transferir información entre clientes web y servidores web",
          correct: false,
        },
        { text: "Representa a un servidor en la red", correct: false },
      ],
    },
    {
      question:
        "El servicio de transferencia de ficheros permite gestionar la transferencia de ficheros entre dos lugares situados en diferentes dispositivos, y se ejecuta sobre:",
      options: [
        { text: "UDP", correct: false },
        { text: "HTTP", correct: false },
        { text: "TCP", correct: true },
      ],
    },
    {
      question: "POP3 y SMTP:",
      options: [
        {
          text: "Son servicios orientados a distribuir archivos de música",
          correct: false,
        },
        {
          text: "Son protocolos que se utilizan para transferir información entre clientes web y servidores web",
          correct: false,
        },
        {
          text: "Son protocolos utilizados para enviar mensajes de email de clientes a servidores a través de Internet",
          correct: true,
        },
      ],
    },
    {
      question: "El protocolo TCP :",
      options: [
        { text: "Tiene 2 capas (TCP e IP)", correct: false },
        {
          text: "Tiene 4 capas (acceso a red, Internet, transporte y aplicación)",
          correct: true,
        },
        {
          text: "Tiene 7 capas (física, enlace, red, transporte, sesión, presentación y aplicación)",
          correct: false,
        },
      ],
    },
    {
      question:
        "¿Qué característica no es propia del modelo cliente/servidor?:",
      options: [
        {
          text: "Existe una clara distinción de funciones basada en el concepto de servicio",
          correct: false,
        },
        {
          text: "El recurso compartido se encuentra en los equipos clientes",
          correct: true,
        },
        {
          text: "El cliente interactúa con el usuario y el servidor interactúa con los recursos compartidos",
          correct: false,
        },
      ],
    },
    {
      question: "En la capa de transporte de TCP se encuentran los protocolos:",
      options: [
        { text: "FTP y SMTP", correct: false },
        { text: "TCP y UDP", correct: true },
        { text: "ATP y PPP", correct: false },
      ],
    },
    {
      question: "El acierto de Internet ha sido:",
      options: [
        {
          text: "Ha sido la estandarización de un conjunto de servicios “básicos” que son capaces de soportar nuevos servicios de más alto nivel y garantizar la interoperabilidad",
          correct: true,
        },
        {
          text: "Ha sido la nula estandarización de un conjunto de servicios “básicos” que son capaces de soportar nuevos servicios de más bajo nivel",
          correct: false,
        },
        {
          text: "Ha sido el uso de navegadores como Internet Explorer",
          correct: false,
        },
      ],
    },
    {
      question: "El protocolo FTP:",
      options: [
        { text: "Tiene importantes deficiencias de seguridad", correct: true },
        {
          text: "Contempla algunos aspectos de seguridad basados en SSL",
          correct: false,
        },
        { text: "Es uno de los más seguros", correct: false },
      ],
    },
    {
      question: "El éxito de la red global:",
      options: [
        {
          text: "Ha sido la falta de definición de protocolos para el intercambio de información",
          correct: false,
        },
        {
          text: "Ha sido el desarrollo de una conectividad a unos precios bastante elevados",
          correct: false,
        },
        {
          text: "Ha sido el desarrollo de una conectividad barata y eficiente.",
          correct: true,
        },
      ],
    },
    {
      question: "Los servicios de mensajería:",
      options: [
        {
          text: "Son los que proveen bases de datos a los clientes de la red para almacenar y recuperar los datos",
          correct: false,
        },
        {
          text: "Son los que incluyen las aplicaciones de red necesarias para almacenar y recuperar datos de archivos",
          correct: false,
        },
        {
          text: "Son los que incluyen las aplicaciones necesarias para almacenar, acceder y entregar los mensajes",
          correct: true,
        },
      ],
    },
    {
      question:
        "Los servicios que ayudan a hacer más eficiente el uso de hardware de almacenamiento:",
      options: [
        { text: "Son los servicios de archivo", correct: true },
        { text: "Son los servicios de mensajería", correct: false },
        { text: "Son los servicios públicos", correct: false },
      ],
    },
    {
      question: "¿Qué es SOAP (Simple Object Access Protocol)?:",
      options: [
        {
          text: "Un mecanismo para establecer el diseño de la junta de la trócola",
          correct: false,
        },
        {
          text: "Una capa del modelo de comunicaciones OSI (modelo de interconexión de sistemas abiertos)",
          correct: false,
        },
        {
          text: "Un protocolo para definir el formato de intercambio de mensajes usado en servicios web",
          correct: true,
        },
      ],
    },
    {
      question: "PGP:",
      options: [
        {
          text: "Es un protocolo utilizado para asegurar las transacciones de Internet con tarjeta de crédito",
          correct: false,
        },
        {
          text: " Es un protocolo que cifra el contenido del mensaje a intercambiar entre emisor y receptor. En este caso utiliza algoritmos de clave simétrica y asimétrica. Garantiza laintegridad de la información, la confidencialidad, la autenticación y no repudio.",
          correct: true,
        },
        {
          text: "Un conjunto de protocolos que permiten asegurar las comunicaciones sobre IP autenticando y/o cifrando los paquetes IP",
          correct: false,
        },
      ],
    },
    {
      question: "Los principales métodos de encriptación son:",
      options: [
        {
          text: "Criptografía de clave endométrica y criptografía de clave métrica",
          correct: false,
        },
        {
          text: "Criptografía de clave osimétrica y criptografía de clave perimétrica",
          correct: false,
        },
        {
          text: "Criptografía de clave simétrica y criptografía de clave asimétrica",
          correct: true,
        },
      ],
    },
    {
      question: "¿Cuál de los siguientes es un algoritmo HASH?:",
      options: [
        { text: "Telnet", correct: false },
        { text: "ZHA-1", correct: false },
        { text: "SHA-1", correct: true },
      ],
    },
    {
      question:
        "El inconveniente más importante de la criptografía de clave asimétrica:",
      options: [
        {
          text: "Consiste en la supresión de la necesidad del envío de la clave, siendo por lo tanto un sistema más seguro",
          correct: false,
        },
        {
          text: "Es la necesidad de distribuir la clave que se emplea para el cifrado, pudiendo alguien interceptarla y descifrar el mensaje",
          correct: false,
        },
        {
          text: "Es la lentitud de la operación",
          correct: true,
        },
      ],
    },
    {
      question:
        "Un sistema de control de acceso basado en roles también conocido como RBAC :",
      options: [
        {
          text: "Consiste en una función de seguridad que permite controlar el acceso de usuarios a determinadas tareas normalmente restringidas",
          correct: true,
        },
        {
          text: "Establece que cualquier usuario pueda acceder a la información",
          correct: false,
        },
        {
          text: "Es un método que permite generar un número que representa de manera única a un documento o conjunto de datos",
          correct: false,
        },
      ],
    },
    {
      question: "SSL:",
      options: [
        {
          text: "Se utiliza un sistema de clave simétrica en el que el receptor desconoce la clave utilizada para el cifrado",
          correct: false,
        },
        {
          text: "Es un método que permite generar un número que representa de manera única a un documento o conjunto de datos",
          correct: false,
        },
        {
          text: "Es un protocolo utilizado para realizar conexiones seguras en Internet",
          correct: true,
        },
      ],
    },
    {
      question: "El protocolo SSL:",
      options: [
        {
          text: "Cifra los mensajes intercambiados entre emisor y receptor a través de un algoritmo de cifrado asimétrico y la clave de sesión mediante un algoritmo de cifrado simétrico",
          correct: false,
        },
        {
          text: "Es un protocolo para especificación de servicios web",
          correct: false,
        },
        {
          text: "Cifra los mensajes intercambiados entre emisor y receptor a través de un algoritmo de cifrado simétrico y la clave de sesión mediante un algoritmo de cifrado asimétrico",
          correct: true,
        },
      ],
    },
    {
      question: "El cifrado de clave pública o asimétrica:",
      options: [
        {
          text: "Consiste en la utilización de dos claves, una pública para el cifrado y una privada o secreta para el descifrado",
          correct: true,
        },
        {
          text: "Consiste en la utilización de una única clave para el cifrado y descrifrado del mensaje enviado",
          correct: false,
        },
        {
          text: "Es un método que permite generar un número que representa de manera única a un documento o conjunto de datos",
          correct: false,
        },
      ],
    },
    {
      question: "Indique cuál es un algoritmo de tipo simétrico:",
      options: [
        { text: "XLS", correct: false },
        { text: "DES", correct: true },
        { text: "RSA", correct: false },
      ],
    },
    {
      question: "El problema del cifrado de clave privada o simétrica:",
      options: [
        {
          text: "Es el hecho de que es necesario el envío del mensaje mediante un canal seguro",
          correct: true,
        },
        { text: "Es conocer la clave privada", correct: false },
        {
          text: "Es el hecho de que es necesario el envío del mensaje mediante un canal público abierto",
          correct: false,
        },
      ],
    },
    {
      question: "Gracias a la criptografía:",
      options: [
        {
          text: "Conseguimos preservar la integridad de la web, autenticar al emisor, receptor del mensaje, y confirmar la actualidad del mensaje o el acceso.",
          correct: true,
        },
        {
          text: "Conseguimos identificar al emisor, receptor del mensaje, y negar la actualidad del mensaje o el acceso.",
          correct: false,
        },
        {
          text: "Conseguimos preservar la desintegración de la web, identificar al emisor, receptor del mensaje, y confirmar la actualidad del mensaje o el acceso.",
          correct: false,
        },
      ],
    },
    {
      question: "Los protocolos criptográficos:",
      options: [
        { text: "No hay quién los entienda", correct: false },
        {
          text: "Son protocolos que utilizan algoritmos o métodos gráficos para mejorar la usabilidad",
          correct: false,
        },
        {
          text: "Son protocolos que utilizan algoritmos o métodos criptográficos con el objetivo de conseguir algún propósito de seguridad",
          correct: true,
        },
      ],
    },
    {
      question:
        "El protocolo utilizado para asegurar las transacciones de Internet en las que se necesita tarjeta de crédito es:",
      options: [
        { text: "POINT", correct: false },
        { text: "SSL", correct: false },
        { text: "SET", correct: true },
      ],
    },
    {
      question: "Para firmar :",
      options: [
        {
          text: "Se utiliza un sistema de clave asimétrica en el que se cuentan con dos claves, una privada y otra pública.",
          correct: true,
        },
        {
          text: "Se utiliza un sistema de clave simétrica en el que el receptor desconoce la clave utilizada para el cifrado.",
          correct: false,
        },
        {
          text: "Los mensajes que se transmiten no puedan ser conocidos por otras personas.",
          correct: false,
        },
      ],
    },
    {
      question:
        "¿Cuál es el beneficio más importante de la criptografía de clave simétrica?:",
      options: [
        {
          text: " Es la supresión de la necesidad del envío de la clave, siendo por lo tanto un sistema más seguro",
          correct: false,
        },
        {
          text: "Es la necesidad de distribuir la clave que se emplea para el cifrado por lo que, si alguien consigue hacerse tanto con el mensaje como con la clave utilizada, podrá descifrar el mensaje ",
          correct: false,
        },
        {
          text: " Es su velocidad lo cual hace que este tipo de algoritmos sean los más apropiados para el cifrado de grandes cantidades de datos",
          correct: true,
        },
      ],
    },
    {
      question:
        "Demostrar que somos nosotros y que el emisor es quien dice ser, es:",
      options: [
        { text: "Firmar", correct: false },
        { text: "Cifrar", correct: false },
        { text: "Autenticar", correct: true },
      ],
    },
    {
      question: "¿Dónde se puede aplicar la criptografía?:",
      options: [
        {
          text: "En la seguridad de las comunicaciones, y en la identificación y autentificación",
          correct: true,
        },
        {
          text: "Solo en la seguridad de las comunicaciones",
          correct: false,
        },
        {
          text: "Solo en la identificación y autentificación",
          correct: false,
        },
      ],
    },
    {
      question: "El funcionamiento de la criptografía :",
      options: [
        { text: "Es bastante criptográfico", correct: false },
        {
          text: "Consiste en la publicación de códigos Java para obtener datos confidenciales que circulan por Internet o cualquier red en general",
          correct: false,
        },
        {
          text: "Consiste en la utilización de códigos para escribir datos confidenciales que circulan por Internet o cualquier red en general",
          correct: true,
        },
      ],
    },
    {
      question:
        "¿Qué tipo de criptografía utiliza la misma clave privada tanto para la encriptación como para la desencriptación?:",
      options: [
        { text: "Simétrico", correct: true },
        { text: "Asimétrico", correct: false },
        { text: "Paralelo", correct: false },
      ],
    },
    {
      question:
        "Se utiliza un sistema de clave simétrica en el que el receptor conoce la clave utilizada para el cifrado para:",
      options: [
        { text: "Cifrar", correct: false },
        { text: "Firmar", correct: false },
        { text: "Autenticar", correct: true },
      ],
    },
    {
      question:
        "¿Qué operaciones hay que realizar para optimizar la utilización de sockets en una aplicación cliente/servidor?:",
      options: [
        {
          text: "Monitorizar los tiempos de respuesta, asegurar el sistema y atender múltiples peticiones",
          correct: true,
        },
        { text: "Solo monitorizar los tiempos de respuesta", correct: false },
        { text: "Solo asegurar el sistema", correct: false },
      ],
    },
    {
      question: "¿Qué es FTP?:",
      options: [
        {
          text: "Es un protocolo de red utilizado para el intercambio de mensajes de correo electrónico",
          correct: false,
        },
        {
          text: "Es un conjunto de herramientas de desarrollo de software que le permite al programador crear aplicaciones para un sistema concreto",
          correct: false,
        },
        {
          text: "Es un protocolo de red para la transferencia de archivos entre sistemas conectados a una red TCP (Transmission Control Protocol), basado en la arquitectura cliente-servidor",
          correct: true,
        },
      ],
    },
    {
      question:
        "¿Cómo se llama el mecanismo proporcionado por el lenguaje Java para acceso a métodos remotos?:",
      options: [
        { text: "JSSE (Java Secure Socket Extension)", correct: false },
        { text: "Java WSDL", correct: false },
        { text: "Java RMI", correct: true },
      ],
    },
    {
      question: "Cuando hablamos de servicios de correo electrónico:",
      options: [
        {
          text: "Nos referimos a los servicios de gestión de los mensajes transmitidos por la red",
          correct: false,
        },
        {
          text: "Básicamente nos referimos a dos servicios diferentes que colaboran para conseguirtransmitir un mensaje digital desde el dispositivo del autor (remitente) al dispositivo deldestinatario.",
          correct: true,
        },
        {
          text: "Hablamos de sistemas operativos basados en el protocolo OSI",
          correct: false,
        },
      ],
    },
    {
      question: "La auditoría consiste en :",
      options: [
        {
          text: "Comprobar la identidad del usuario que accede a la aplicación en dos pasos",
          correct: false,
        },
        {
          text: "La presentación de información para comprobar que el cifrado se realiza de forma correcta",
          correct: false,
        },
        {
          text: "Conservar un historial de la aplicación donde se almacene quien la ha realizado, cuando, que permisos tienen los usuarios, etc.",
          correct: true,
        },
      ],
    },
    {
      question: "La encriptación…:",
      options: [
        {
          text: " Consiste en codificar ésta de manera que si es interceptada por personas no autorizadas no sean capaces de descifrar y tener acceso a la información",
          correct: true,
        },
        {
          text: " Es un sistema de control de acceso basado en roles también conocido como RBAC por sus siglas en ingles consiste en una función de seguridad que permite controlar el acceso de usuarios a determinadas tareas normalmente restringidas)",
          correct: false,
        },
        {
          text: "Consiste en protocolos que utilizan algoritmos o métodos criptográficos con el objetivo de conseguir algún objetivo en cuestión de seguridad",
          correct: false,
        },
      ],
    },
    {
      question: "La encriptación de la información consiste en:",
      options: [
        {
          text: "Codificar ésta de manera que se facililte la intercepción por personas no autorizadas para que sean capaces de descifrar y tener acceso a la información",
          correct: false,
        },
        {
          text: " Codificar ésta de manera que si es interceptada por personas autorizadas no sean capaces de descifrar y tener acceso a la información",
          correct: false,
        },
        {
          text: "Codificar ésta de manera que si es interceptada por personas no autorizadas no sean capaces de descifrar y tener acceso a la información",
          correct: true,
        },
      ],
    },
    {
      question:
        "El protocolo que cifra los mensajes intercambiados entre emisor y receptor a través de un algoritmo de cifrado simétrico y la clave de sesión mediante un algoritmo de cifrado asimétrico es:",
      options: [
        { text: "El protocolo SSL", correct: true },
        { text: "El protocolo SEC-1", correct: false },
        { text: "El protocolo FTP", correct: false },
      ],
    },
    {
      question: "La criptografía:",
      options: [
        {
          text: "Es la técnica que permite cifrar mensajes o hacerlos ininteligibles",
          correct: true,
        },
        { text: "Está relacionada con la antropología", correct: false },
        { text: "Es la técnica que permite hacerlos legibles", correct: false },
      ],
    },
    {
      question: "Indique cuál es un algoritmo de tipo asimétrico:",
      options: [
        { text: "RSA", correct: true },
        { text: "XLS", correct: false },
        { text: "DES", correct: false },
      ],
    },
    {
      question: "El cifrado de clave privada o simétrica:",
      options: [
        {
          text: "Consiste en la utilización de una clave pública para el cifrado y otra privada para el descrifrado del mensaje enviado",
          correct: false,
        },
        {
          text: "Consiste en la utilización de varias claves para el cifrado y descrifrado del mensaje enviado",
          correct: false,
        },
        {
          text: "Consiste en la utilización de una única clave para el cifrado y descrifrado del mensaje enviado",
          correct: true,
        },
      ],
    },
    {
      question: "HTTP:",
      options: [
        {
          text: "Es un servicio que ofrece la dirección IP de un sitio web o nombre de dominio para que un host pueda conectarse a éste.",
          correct: false,
        },
        {
          text: "Es un servicio que permite descargar y subir archivos entre un cliente y un servidor",
          correct: false,
        },
        {
          text: "Es un protocolo que se utiliza para transferir información entre clientes web y servidores web",
          correct: true,
        },
      ],
    },
    {
      question: "El servicio WWW o web:",
      options: [
        {
          text: "Normalmente se encuentra asociado al puerto 80",
          correct: true,
        },
        {
          text: "Permite gestionar la transferencia de ficheros entre dos lugares en diferentes dispositivos",
          correct: false,
        },
        { text: "Está basado en Internet Explorer", correct: false },
      ],
    },
    {
      question:
        "Los servicios que incluyen las aplicaciones necesarias para ejecutar software para clientes de red:",
      options: [
        { text: "Son los servicios públicos", correct: false },
        { text: "Son los servicios de mensajería", correct: false },
        { text: "Son los servicios de aplicación", correct: true },
      ],
    },
    {
      question: "¿Qué es un servicio web?:",
      options: [
        {
          text: "Es una tecnología que sirve para intercambiar datos entre aplicaciones a través de internet y que utiliza un conjunto de protocolos y estándares",
          correct: true,
        },
        {
          text: "Un protocolo seguro de transferencia de datos basado en el protocolo HTTP",
          correct: false,
        },
        {
          text: " Un conjunto de clases utilizadas para ejecutar las operaciones necesarias para invocar el protocolo SSL desde el código fuente de Java",
          correct: false,
        },
      ],
    },
    {
      question: "FTP:",
      options: [
        {
          text: "Es un servicio que permite descargar y subir archivos entre un cliente y un servidor",
          correct: true,
        },
        {
          text: "Es un protocolo que se utiliza para transferir información entre clientes web y servidores web",
          correct: false,
        },
        {
          text: " Es un servicio que ofrece la dirección IP de un sitio web o nombre de dominio para que un host pueda conectarse a éste.",
          correct: false,
        },
      ],
    },
    {
      question: "SMTP y FTP son protocolos de la capa de:",
      options: [
        { text: "Internet", correct: false },
        { text: "Aplicación", correct: true },
        { text: "Acceso a la red", correct: false },
      ],
    },
    {
      question: "La acción de cifrar:",
      options: [
        {
          text: "Permite que los mensajes que se transmiten no puedan ser conocidos por terceras personas",
          correct: true,
        },
        {
          text: "Se utiliza para demostrar que somos nosotros y que el emisor es quien dice ser",
          correct: false,
        },
        {
          text: "Utiliza un sistema de clave asimétrica en el que se cuentan con dos claves, una privada y otra pública",
          correct: false,
        },
      ],
    },
    {
      question: "Un algoritmo HASH:",
      options: [
        {
          text: "Es un método que permite generar un número que representa de manera única a un documento o conjunto de datos",
          correct: true,
        },
        {
          text: "Es un protocolo que cifra los mensajes intercambiados entre emisor y receptor a través de un algoritmo de cifrado simétrico y la clave de sesión mediante un algoritmo de cifrado asimétrico",
          correct: false,
        },
        {
          text: "Es un protocolo utilizado para realizar conexiones seguras en Internet",
          correct: false,
        },
      ],
    },
    {
      question: "La autenticación:",
      options: [
        {
          text: "Permite comprobar la identidad del usuario que accede a la aplicación",
          correct: true,
        },
        {
          text: "Permite conservar un historial de la aplicación",
          correct: false,
        },
        {
          text: "Permite definir los privilegios de un usuario en una aplicación",
          correct: false,
        },
      ],
    },
  ],
  progr_mult_dispos_moviles: [
    {
      question: "¿Qué significan las siglas API?",
      options: [
        { text: "Application Process Interface.", correct: false },
        { text: "Application Programming Interface.", correct: true },
        { text: "Android Programming Interface", correct: false },
      ],
    },
    {
      question:
        "¿Cómo se conoce al componente central de cualquier motor de juego, 3D o 2D, que vincula todos los subsistemas que se analizarán a continuación en un paquete limpio y fácil de usar?",
      options: [
        { text: "Renderizado.", correct: false },
        { text: "Core.", correct: false },
        { text: "Interfaz de desarrollo.", correct: true },
      ],
    },
    {
      question:
        "¿Cuál es el paso inicial más importante en cualquier proyecto y en el diseño de los videojuegos no es una excepción?",
      options: [
        { text: "La depuración del código.", correct: false },
        { text: "Una planificación adecuada.", correct: true },
        { text: "La creación de story boards.", correct: false },
      ],
    },
    {
      question: "CryEngine es un motor 3D utilizado en:",
      options: [
        { text: "Warface o Crysis.", correct: true },
        { text: "Battlefield.", correct: false },
        { text: "Warcraft.", correct: false },
      ],
    },
    {
      question:
        "¿Cuál de los siguientes pasos en el proceso de hacer un juego desde cero consiste en decidir cómo va a ser el juego, su parte gráfica, cómo juega y de qué se trata?",
      options: [
        { text: "Programación.", correct: false },
        { text: "Conceptualización.", correct: true },
        { text: "Arte.", correct: false },
      ],
    },
    {
      question: "Unity es:",
      options: [
        {
          text: "Uno de los motores más potentes, el cual ofrece múltiples y completos recursos y tutoriales.",
          correct: true,
        },
        {
          text: "Unos de los motores más usados dentro de la industria, que nos ofrece alta calidad de gráficos y muchas funcionalidades.",
          correct: false,
        },
        {
          text: "Un motor que nos permite crear escenarios de alta calidad con bastante facilidad.",
          correct: false,
        },
      ],
    },
    {
      question:
        "¿Cuál es el primer paso en el proceso de hacer un juego desde cero?",
      options: [
        { text: "Arte.", correct: false },
        { text: "Conceptualización.", correct: true },
        { text: "Programación.", correct: false },
      ],
    },
    {
      question:
        "¿Cuál de los siguientes pasos en el proceso de hacer un juego desde cero consiste en escribir los sistemas que determinan cómo el jugador interactúa con el mundo del juego?",
      options: [
        { text: "Conceptualización.", correct: false },
        { text: "Arte.", correct: false },
        { text: "Programación.", correct: true },
      ],
    },
    {
      question:
        "¿Qué motor de videojuegos 3D fue creado por Epic Games y es uno de los más usados y conocidos para la creación de juegos AAA como Warseries y otros?",
      options: [
        { text: "Frostbite.", correct: false },
        { text: "Unreal.", correct: true },
        { text: "CryEngine.", correct: false },
      ],
    },
    {
      question: "Dentro del documento de diseño de un juego podemos encontrar…",
      options: [
        { text: "La creación de story boards.", correct: false },
        {
          text: "Notas escritas que sirven de guía para nuestro juego.",
          correct: true,
        },
        { text: "Lista de verificación de activos.", correct: false },
      ],
    },
    {
      question: "Un videojuego es…",
      options: [
        {
          text: "Es un juego electrónico en el que una o más personas interactúan por medio de un controlador, con un dispositivo que muestra imágenes de vídeo.",
          correct: true,
        },
        {
          text: "Es cualquier programa informático siempre que contenga una IA (Inteligencia Artificial).",
          correct: false,
        },
        {
          text: "Es cualquier programa informático siempre que haya sido renderizado.",
          correct: false,
        },
      ],
    },
    {
      question:
        "¿Qué motor de videojuegos 3D es usado en los juegos de Call of duty?",
      options: [
        { text: "Unreal.", correct: false },
        { text: "IW Engine.", correct: true },
        { text: "CryEngine.", correct: false },
      ],
    },
    {
      question:
        "¿Cuál de las siguientes NO es una biblioteca de código abierto para el manejo de audio en un videojuego?",
      options: [
        { text: "FreeAudioLibrary.", correct: true },
        { text: "OpenAL-Soft.", correct: false },
        { text: "PortAudio.", correct: false },
      ],
    },
    {
      question:
        "Dentro del proceso de “Arte” de un videojuego nos podemos encontrar con…",
      options: [
        {
          text: "Decidir cada fotograma de cada animación de personaje.",
          correct: true,
        },
        { text: "Lista de verificación de activos.", correct: false },
        {
          text: "Un documento compartido que se denominase ideas.",
          correct: false,
        },
      ],
    },
    {
      question:
        "En el motor de videojuegos Construct 2, si queremos colocar un objeto en la esquina superior izquierda ¿qué valor debemos indicar en la propiedad “Position”?",
      options: [
        { text: "Depende del tamaño del Layout.", correct: false },
        { text: "0,0.", correct: true },
        {
          text: "Debemos fijar aparte la propiedad “Angle” a 0.",
          correct: false,
        },
      ],
    },
    {
      question:
        "Para calcular el sombreado de un objeto 3D, Unity necesita conocer…",
      options: [
        {
          text: "El gestor de luz intrínseco al componente del objeto.",
          correct: false,
        },
        {
          text: "La intensidad, dirección y color de la luz que incide sobre éste.",
          correct: true,
        },
        { text: "La propiedad shadow del GameObject.", correct: false },
      ],
    },
    {
      question: "El renderizado en Unity se hace con…",
      options: [
        { text: "Materials, Shaders y Textures.", correct: true },
        { text: "Objects y Components.", correct: false },
        { text: "Spot lights y Point lights.", correct: false },
      ],
    },
    {
      question:
        "En el motor de videojuegos Construct 2, ¿cuál de los siguientes comportamientos hace que la cámara siga a un objeto que se mueve?",
      options: [
        { text: "Bullet movement.", correct: false },
        { text: "8 Direction movement.", correct: false },
        { text: "Scroll to.", correct: true },
      ],
    },
    {
      question:
        "¿En qué ventana podemos ver todos los objetos de la escena, crear objetos de distintos tipos, seleccionarlos o borrarlos?",
      options: [
        { text: "Ventana de la escena.", correct: false },
        { text: "Ventana de inspector.", correct: false },
        { text: "Ventana de jerarquía.", correct: true },
      ],
    },
    {
      question:
        "En el motor de videojuegos Construct 2, ¿cuál de los siguientes comportamientos evitará que un objeto abandone el área del layout?",
      options: [
        { text: "Destroy outside layout.", correct: false },
        { text: "Scroll to.", correct: false },
        { text: "Bound to layout.", correct: true },
      ],
    },
    {
      question: "Los Point Lights son útiles para…",
      options: [
        {
          text: "Simular fuentes de luz artificiales tales como linternas, los faros de un coche y reflectores.",
          correct: false,
        },
        {
          text: "Simular flashes y otras fuentes de luz explosivas en la escena.",
          correct: false,
        },
        {
          text: "Simular lámparas y otras fuentes de luz locales en la escena.",
          correct: true,
        },
      ],
    },
    {
      question: "En el motor de videojuegos Construct 2, los eventos…",
      options: [
        {
          text: "Si ninguna de las condiciones se cumplen, las acciones de todos los eventos, se ejecutarán",
          correct: false,
        },
        {
          text: "Si alguna de las condiciones se cumplen, las acciones de todos los eventos, se ejecutarán",
          correct: false,
        },
        {
          text: "Consisten en condiciones, que comprueban si se cumplen ciertos criterios.",
          correct: true,
        },
      ],
    },
    {
      question:
        "En el motor de videojuegos Construct 2, ¿cuál de los siguientes NO es un objeto que permanece oculto en el Layout?",
      options: [
        { text: "Teclado (Keyboard).", correct: false },
        { text: "texto (Text).", correct: true },
        { text: "Ratón (Mouse).", correct: false },
      ],
    },
    {
      question:
        "En el motor de videojuegos Unity, ¿en un objeto cómo podemos movernos hacia distintos puntos de la escena moviendo el ratón?",
      options: [
        {
          text: "Haciendo clic en el botón derecho del ratón y sin soltar.",
          correct: true,
        },
        { text: "Presionando la tecla “W”.", correct: false },
        { text: "Presionando la tecla “S”.", correct: false },
      ],
    },
    {
      question:
        "En el motor de videojuegos Unity, ¿cómo se llama a la ventana dónde podemos realizar acciones como acceder a los componentes del objeto seleccionado (por ejemplo, para transformarlo) o añadir componentes a dicho objeto (por ejemplo, un script)?",
      options: [
        { text: "Ventana de la escena.", correct: false },
        { text: "Ventana de jerarquía.", correct: false },
        { text: "Ventana de inspector.", correct: true },
      ],
    },
    {
      question:
        "En el motor de videojuegos Construct 2, ¿qué propiedad deberíamos utilizar para cambiar el nombre de un sprite?",
      options: [
        { text: "Propertie.", correct: false },
        { text: "Layer.", correct: false },
        { text: "Name.", correct: true },
      ],
    },
    {
      question:
        "¿Cuál de las siguientes NO es una afirmación correcta sobre el uso de las capas (layer) en el motor de videojuegos Construct?",
      options: [
        {
          text: "Solo se puede introducir una capa por cada Layout.",
          correct: true,
        },
        {
          text: "El uso de capas, te permitirá organizar fácilmente los objetos que se encuentren más cerca de ti de otros que se hallen más lejos.",
          correct: false,
        },
        {
          text: "Las capas pueden ocultarse, bloquearse, contemplan la posibilidad de paralaje y muchas cosas más.",
          correct: false,
        },
      ],
    },
    {
      question: "MPEG-2…",
      options: [
        {
          text: "Se utiliza para difundir audio y vídeo de calidad para televisión.",
          correct: true,
        },
        {
          text: "Es estándar inicial de audio y vídeo para CD.",
          correct: false,
        },
        {
          text: "Soporta objetos de audio/vídeo, contenidos 3D y gestión digital de derechos.",
          correct: false,
        },
      ],
    },
    {
      question: "¿Cuál de los siguientes formatos es contenedor de QuickTime?",
      options: [
        { text: "AVI.", correct: false },
        { text: "Ninguna de las anteriores.", correct: true },
        { text: "ASF.", correct: false },
      ],
    },
    {
      question: "RTP es…",
      options: [
        { text: "Un formato de audio sin pérdida de calidad", correct: false },
        { text: "Un formato de audio con pérdida de calidad", correct: false },
        {
          text: "Un protocolo de nivel de sesión para la transmisión de la información en tiempo real.",
          correct: true,
        },
      ],
    },
    {
      question:
        "¿A través de qué clase se permite capturar imágenes o vídeos desde la cámara sin necesidad de tener que usar un objeto Camera?",
      options: [
        { text: "Intent.", correct: true },
        { text: "SurfaceView.", correct: false },
        { text: "MediaRecorder.", correct: false },
      ],
    },
    {
      question: "Una API es…",
      options: [
        {
          text: "Un conjunto de funciones, métodos y procedimientos que ofrece la posibilidad de compilar y ejecutar aplicaciones multimedia.",
          correct: false,
        },
        {
          text: "Un conjunto de funciones, métodos y procedimientos que ofrece una biblioteca para ser usada por otro software.",
          correct: true,
        },
        {
          text: "Un conjunto de funciones, métodos y procedimientos que ofrece la posibilidad de compilar aplicaciones multimedia.",
          correct: false,
        },
      ],
    },
    {
      question: "¿Cuál de los siguientes es un formatos de audio con pérdida?",
      options: [
        { text: "WAV.", correct: false },
        { text: "AU.", correct: false },
        { text: "MP3.", correct: true },
      ],
    },
    {
      question: "El paquete Android.media.efect…",
      options: [
        {
          text: "proporciona varias clases que permiten aplicar una variedad de efectos visuales a imágenes y vídeos como por ejemplo eliminar el efecto de los ojos rojos.",
          correct: true,
        },
        {
          text: "Contiene las clases para editar los textos descriptivos de imágenes y vídeos.",
          correct: false,
        },
        {
          text: "Contiene las clases para reproducir y grabar contenidos multimedia de audio y vídeo.",
          correct: false,
        },
      ],
    },
    {
      question: "La clase VídeoView…",
      options: [
        { text: "Hereda de la clase MediaPlayer.", correct: false },
        {
          text: "Proporciona los botones típicos de PLAY, STOP, PAUSA, AVANCE, RETROCESO, etc.",
          correct: false,
        },
        { text: "Permite visualizar un fichero de vídeo.", correct: true },
      ],
    },
    {
      question:
        "Representación de palabras, conceptos, ideas mediante dibujos o imágenes, tendí concepto o idea a transmitir:",
      options: [
        { text: "Gráficos.", correct: false },
        { text: "Imágenes estáticas.", correct: false },
        { text: "Iconográficos.", correct: true },
      ],
    },
    {
      question:
        "En la clase MediaRecorder ¿qué método define el formato del fichero de salida que se produce durante la grabación.?",
      options: [
        { text: "setVideoFormat.", correct: false },
        { text: "setOutFormat.", correct: false },
        { text: "setOutputFormat.", correct: true },
      ],
    },
    {
      question: "¿Cuál de los siguientes es un formatos de audio sin pérdida?",
      options: [
        { text: "WavPack.", correct: true },
        { text: "Vorbis.", correct: false },
        { text: "AIFF.", correct: false },
      ],
    },
    {
      question: "El paquete Android.media…",
      options: [
        {
          text: "Contiene las clases para reproducir y grabar contenidos multimedia de audio y vídeo.",
          correct: true,
        },
        {
          text: "Contiene las clases para editar los textos descriptivos de imágenes y vídeos.",
          correct: false,
        },
        {
          text: "Contiene las clases necesarias para crear recursos iconográficos.",
          correct: false,
        },
      ],
    },
    {
      question: "¿Con qué sentencia se da permisos de Internet en Android?",
      options: [
        { text: "NaN", correct: false },
        { text: "”android.INTERNET.permission”/>.", correct: false },
        { text: "”android.permission.INTERNET”/>.", correct: true },
      ],
    },
    {
      question: "¿Qué entendemos por IA en un videojuego?",
      options: [
        {
          text: "Se refiere a las técnicas utilizadas para producir la ilusión de inteligencia en el comportamiento de los personajes no jugadores.",
          correct: true,
        },
        {
          text: "Se refiere a las técnicas que los motores proporcionan a los desarrolladores para realizar una depuración de código más efectiva.",
          correct: false,
        },
        {
          text: "Se refiere a las técnicas que los motores de videojuegos proporcionan a los desarrolladores para realizar un desarrollo de código más efectivo.",
          correct: false,
        },
      ],
    },
    {
      question: "Para el diseño de arte de un juego, necesitaremos:",
      options: [
        { text: "Solo material conceptual.", correct: false },
        {
          text: "Material conceptual y una estación de trabajo.",
          correct: true,
        },
        { text: "Solo una estación de trabajo.", correct: false },
      ],
    },
    {
      question: "¿Qué entendemos por juego AAA?",
      options: [
        {
          text: "Es un concepto que indica las tres características principales de un videojuego: Availabilty, Action y Assurance.",
          correct: false,
        },
        {
          text: "Es un videojuego 2D desarrollado sobre el motor del mismo nombre.",
          correct: false,
        },
        {
          text: "Un juego AAA es una clasificación informal utilizada para los videojuegos producidos y distribuidos por una distribuidora importante o editor importante, típicamente teniendo marketing y desarrollo de alto presupuesto.",
          correct: true,
        },
      ],
    },
    {
      question:
        "¿En qué década nos encontramos con una continua mejora del hardware de los videojuegos?",
      options: [
        { text: "Años 90.", correct: true },
        { text: "Años 80.", correct: false },
        { text: "Fue en el siglo XXI.", correct: false },
      ],
    },
    {
      question: "¿Cuál de los siguientes NO es un motor de videojuegos 2D?",
      options: [
        { text: "Construct2.", correct: false },
        { text: "GameMaker.", correct: false },
        { text: "2D Real War Engine.", correct: true },
      ],
    },
    {
      question:
        "¿Cómo se conoce al componente que representa de forma abstracta el mundo del juego y los objetos que residen en él, lo que facilita a los desarrolladores razonar acerca de su juego?",
      options: [
        { text: "Renderizado.", correct: false },
        { text: "Core.", correct: true },
        { text: "Interfaz de desarrollo.", correct: false },
      ],
    },
    {
      question:
        "El tipo de luz que tiene la propiedad de crear un efecto de flash es:",
      options: [
        { text: "Luz direccional.", correct: false },
        { text: "Pointlight.", correct: false },
        { text: "Spotlight.", correct: true },
      ],
    },
    {
      question:
        "El primer paso para incorporar un fondo a nuestro proyecto en Construct 2 es:",
      options: [
        { text: "Seleccionar el background.", correct: false },
        { text: "Cambiar los tamaños del proyecto.", correct: true },
        { text: "Bloquear el Layer.", correct: false },
      ],
    },
    {
      question: "En el motor de videojuegos Unity, Vector3 es…",
      options: [
        {
          text: "Es un motor totalmente gratuito que funciona sobre Windows.",
          correct: false,
        },
        {
          text: "Un lenguaje diseñado específicamente para uso con Unity y modelado tras JavaScript.",
          correct: false,
        },
        {
          text: "Una estructura para almacenar posiciones en 3D y direcciones.",
          correct: true,
        },
      ],
    },
    {
      question:
        "En el motor de videojuegos Construct 2, ¿cuál de los siguientes comportamientos hace que los objetos poco a poco se desvanezcan?",
      options: [
        { text: "Bullet movement.", correct: false },
        { text: "Scroll to.", correct: false },
        { text: "Fade.", correct: true },
      ],
    },
    {
      question:
        "En el motor de videojuegos Unity soporta los siguientes lenguajes de forma nativa (sin necesidad de compilar un DLL compatible):",
      options: [
        { text: "Kotlin y Python.", correct: false },
        {
          text: "C++ y UnityScript (un lenguaje diseñado específicamente para uso con Unity y modelado tras JavaScript).",
          correct: false,
        },
        { text: "C", correct: true },
      ],
    },
    {
      question:
        "En el motor de videojuegos Unity, ¿cuál de las siguientes NO es una afirmación correcta sobre los GameObjects?",
      options: [
        {
          text: "Son objetos fundamentales en Unity que representan personajes, props, y el escenario.",
          correct: false,
        },
        {
          text: "Implementan la verdadera funcionalidad del juego, sin necesidad de Components.",
          correct: true,
        },
        {
          text: "Siempre tiene el componente Transform adjunto (para representar la posición y orientación) y no es posible quitar esto.",
          correct: false,
        },
      ],
    },
    {
      question:
        "En el motor de videojuegos Construct 2, ¿cómo se denomina la primera capa que aparece en la lista de capas?",
      options: [
        { text: "Layer 1.", correct: false },
        { text: "Layer 0.", correct: true },
        { text: "Layout 0.", correct: false },
      ],
    },
    {
      question:
        "A la hora de implementar los métodos de la clase MediaPlayer para la reproducción del audio através de la web…",
      options: [
        {
          text: "Es imprescindible comprobar previamente la conexión a Internet utilizando el método checkInternet().",
          correct: false,
        },
        {
          text: "No es posible, la clase MediaPlayer solo permite reproducir audio desde un fichero local o desde una tarjeta SD.",
          correct: false,
        },
        {
          text: "Android Studio pide hacerlo bajo un try-catch para capturar cualquier posible error que se pueda producir.",
          correct: true,
        },
      ],
    },
    {
      question: "MPEG-3…",
      options: [
        {
          text: "Soporta objetos de audio/vídeo, contenidos 3D y gestión digital de derechos.",
          correct: false,
        },
        {
          text: "Se utiliza para difundir audio y vídeo de calidad para televisión.",
          correct: true,
        },
        {
          text: "Es estándar inicial de audio y vídeo para CD.",
          correct: false,
        },
      ],
    },
    {
      question:
        "En la clase MediaRecorder ¿qué método establece la fuente de audio o de vídeo, respectivamente, para ser usada en la grabación?",
      options: [
        { text: "setAudioSource y setVideoSource.", correct: true },
        { text: "setDataSource para ambos.", correct: false },
        { text: "setAudioURI y setVideoURI.", correct: false },
      ],
    },
    {
      question:
        "¿A través de qué método se establece la fuente que contiene el vídeo a reproducir en la clase VídeoView?",
      options: [
        { text: "setVideoSource().", correct: false },
        { text: "setVideoURI", correct: true },
        { text: "setDataSource()", correct: false },
      ],
    },
    {
      question:
        "¿Qué nombre recibe el proceso para la distribución de contenidos multimedia por la red, permitiendo que el usuario pueda consumir el producto en el mismo tiempo que lo descarga?",
      options: [
        { text: "Recorder.", correct: false },
        { text: "Streaming.", correct: true },
        { text: "Códec.", correct: false },
      ],
    },
    {
      question: "MIDI es…",
      options: [
        {
          text: "Un conjunto de elementos multimedia entre los que destacan archivos de música que permite crear aplicaciones multimedia.",
          correct: false,
        },
        {
          text: "Un estándar para la conversión entre formatos de sonido compatibles.",
          correct: false,
        },
        {
          text: "Un protocolo de comunicación de serie estándar para comunicar y compartir información en la generación de sonidos entre computadores, sintetizadores, secuenciadores, controladores y demás equipos electrónicos de tratamiento de sonido.",
          correct: true,
        },
      ],
    },
    {
      question:
        "MediaController se combina con VídeoView para el manejo de la reproducción del vídeo, enlazándose a través del método…",
      options: [
        { text: "MediaController.", correct: false },
        { text: "setControllerMedia.", correct: false },
        { text: "setMediaController.", correct: true },
      ],
    },
    {
      question:
        "¿Qué paquete proporciona varias clases que permiten aplicar una variedad de efectos visuales a imágenes y vídeos?",
      options: [
        { text: "android.media.efect.", correct: true },
        { text: "android.image.efect.", correct: false },
        { text: "android.video.efect.", correct: false },
      ],
    },
    {
      question: "¿Cuál de los siguientes no es un formato de imagen?",
      options: [
        { text: "EPS.", correct: false },
        { text: "PSD.", correct: false },
        { text: "ASF.", correct: true },
      ],
    },
    {
      question:
        "¿Qué formato de los siguientes proporciona una compresión de datos con pérdida?",
      options: [
        { text: "AVI.", correct: false },
        { text: "MOV.", correct: false },
        { text: "MPEG.", correct: true },
      ],
    },
    {
      question:
        "¿Qué motor de videojuegos 3D fue creado por EA y usado por Battlefield y otros títulos?",
      options: [
        { text: "Frostbite.", correct: true },
        { text: "Unreal.", correct: false },
        { text: "CryEngine.", correct: false },
      ],
    },
    {
      question:
        "¿Cuál es el componente central de cualquier motor de juego 3D o 2D que vincula todos los subsistemas que se analizarán a continuación en un paquete limpio y fácil de usar?",
      options: [
        { text: "Interfaz de desarrollo.", correct: true },
        { text: "Renderizado.", correct: false },
        { text: "Inteligencia Artificial (AI) y Físicas.", correct: false },
      ],
    },
    {
      question: "¿Cuál fue el famoso videojuego lanzado por Atari?",
      options: [
        { text: "Pong.", correct: true },
        { text: "Warfare.", correct: false },
        { text: "Warcraft.", correct: false },
      ],
    },
    {
      question: "¿Qué se entiende por NPC en un videojuego?",
      options: [
        {
          text: "Network Power Connect o la capacidad de conectarse a Internet.",
          correct: false,
        },
        { text: "Son los personajes sin jugador.", correct: true },
        {
          text: "Es la característica que índica la posibilidad del videojuego de ser renderizado.",
          correct: false,
        },
      ],
    },
    {
      question:
        "¿En las fases de diseño de videojuegos como se conocería a la que permitiría hospedarlo en línea, enviarlo a mercados abiertos y enviarlo a sitios cerrados como GooglePlay o iOS App Store?",
      options: [
        { text: "Conceptualización.", correct: false },
        { text: "Distribución y publicación.", correct: true },
        { text: "Programación.", correct: false },
      ],
    },
    {
      question:
        "¿Cuál de los siguientes no es un paso en el diseño de videojuegos?",
      options: [
        { text: "Conceptualización.", correct: false },
        { text: "Programación.", correct: false },
        { text: "Renderización.", correct: true },
      ],
    },
    {
      question:
        "En el motor de videojuegos Unity ¿Cuál de los siguientes son imágenes bitmap que pueden representar otros aspectos de la superficie de un material tal como su reflectividad o rugosidad?",
      options: [
        { text: "Textures.", correct: true },
        { text: "Materials.", correct: false },
        { text: "Shaders.", correct: false },
      ],
    },
    {
      question:
        "En el motor de videojuegos Unity ¿Cuál de los siguientes son scripts pequeños que contienen los cálculos de matemáticas y algoritmos para calcular el color de cada pixel renderizado, basándose en el input de iluminación y la configuración del Material?",
      options: [
        { text: "Materials.", correct: false },
        { text: "Shaders.", correct: true },
        { text: "Textures.", correct: false },
      ],
    },
    {
      question:
        "¿Cuál de las siguientes NO es una afirmación correcta sobre el motor de videojuegos Construct?",
      options: [
        {
          text: "Existe una versión gratuita y una de pago, permitiendo la de pago ciertas características adicionales.",
          correct: false,
        },
        {
          text: "Es un motor totalmente gratuito que funciona sobre Windows.",
          correct: false,
        },
        {
          text: "Para poderlo ejecutar sobre otras plataformas distintas a Linux deberemos tener una instalación de Linux mediante Parallels",
          correct: true,
        },
      ],
    },
    {
      question:
        "En el motor de videojuegos Construct 2, ¿cuál de los siguientes comportamientos permite mover un objeto en hasta 8 direcciones, por medio de las teclas con flechas de desplazamiento?",
      options: [
        { text: "8 Direction movement.", correct: true },
        { text: "Bullet movement.", correct: false },
        { text: "Scroll to.", correct: false },
      ],
    },
    {
      question:
        "En el motor de videojuegos Unity ¿Cuál de los siguientes hace referencia a las definiciones acerca de cómo la superficie debería ser renderizada, incluyendo referencias a texturas utilizadas, información del tiling (suelo de baldosas), tines de color y más?",
      options: [
        { text: "Shaders.", correct: false },
        { text: "Textures.", correct: false },
        { text: "Materials.", correct: true },
      ],
    },
    {
      question:
        "En el motor de videojuegos Construct 2, ¿qué objeto nos permite crear un background (fondo) compuesto de tiles (baldosas) que se repiten a lo largo y ancho formando un mosaico?",
      options: [
        { text: "Filled Tiled.", correct: false },
        { text: "Filled Background.", correct: false },
        { text: "Tiled Background.", correct: true },
      ],
    },
    {
      question:
        "En el motor de videojuegos Unity, el componente Transform de un GameObject…",
      options: [
        {
          text: "Es fundamental en Unity y representa personajes, props, y el escenario.",
          correct: false,
        },
        {
          text: "Determina la Position, Rotation, y Scale de cada objeto en la escena.",
          correct: true,
        },
        {
          text: "Implementa la verdadera funcionalidad del juego, sin necesidad de otros Components.",
          correct: false,
        },
      ],
    },
    {
      question:
        "¿Qué método de MediaPlayer se usa para la reproducción de contenidos en la web?",
      options: [
        { text: "setSource().", correct: false },
        { text: "setInternetSource().", correct: false },
        { text: "setDataSource()", correct: true },
      ],
    },
    {
      question: "¿Cuál de las siguientes NO es una fuente de datos multimedia?",
      options: [
        {
          text: "Realmente todas son fuentes de datos multimedia.",
          correct: true,
        },
        { text: "Secuencias MIDI.", correct: false },
        { text: "Clips de audio.", correct: false },
      ],
    },
    {
      question:
        "La clase que permite la grabación tanto de audio como de vídeo es…",
      options: [
        { text: "MediaAccess.", correct: false },
        { text: "MediaRecorder.", correct: true },
        { text: "MediaPlayer.", correct: false },
      ],
    },
    {
      question: "MPEG-1…",
      options: [
        {
          text: "Se utiliza para difundir audio y vídeo de calidad para televisión.",
          correct: false,
        },
        {
          text: "Soporta objetos de audio/vídeo, contenidos 3D y gestión digital de derechos.",
          correct: false,
        },
        {
          text: "Es estándar inicial de audio y vídeo para CD.",
          correct: true,
        },
      ],
    },
    {
      question: "¿Qué es renderizar en un videojuego?",
      options: [
        {
          text: "Es el proceso equivalente a la depuración de una aplicación para un dispositivo móvil.",
          correct: false,
        },
        {
          text: "Es el proceso por el cual el código fuente de un videojuego se convierte en código máquina.",
          correct: false,
        },
        {
          text: "Es el término para referirse al proceso de generar imagen fotorrealista, o no, a partir de un modelo 2D o 3D por medio de programas informáticos.",
          correct: true,
        },
      ],
    },
    {
      question:
        "¿En qué año el mundo del videojuego experimentó el nacimiento de Magnavox Odyssey?",
      options: [
        { text: "1974.", correct: false },
        { text: "1973.", correct: false },
        { text: "1972.", correct: true },
      ],
    },
    {
      question:
        "¿Qué motor de videojuegos 3D es utilizado por sagas como Warface?",
      options: [
        { text: "IW Engine.", correct: false },
        { text: "CryEngine.", correct: true },
        { text: "Frostbite.", correct: false },
      ],
    },
    {
      question:
        "¿Cuál de las siguientes necesidades podría estar en el proceso de conceptualización?",
      options: [
        { text: "Arte conceptual.", correct: true },
        { text: "Depuración del código.", correct: false },
        { text: "", correct: false },
      ],
    },
    {
      question:
        "¿Cuál de los siguientes pasos en el proceso de hacer un juego desde cero consiste en crear sprites, texto, modelos e interfaz de usuario para tu juego?",
      options: [
        { text: "Programación.", correct: false },
        { text: "Conceptualización.", correct: false },
        { text: "Arte.", correct: true },
      ],
    },
    {
      question:
        "En el motor de videojuegos Unity, ¿cómo se llama a la ventana dónde podemos ver todos los objetos de la escena, crear objetos de distintos tipos, seleccionarlos o borrarlos?",
      options: [
        { text: "Ventana de inspector.", correct: false },
        { text: "Ventana de la escena.", correct: false },
        { text: "Ventana de jerarquía.", correct: true },
      ],
    },
    {
      question:
        "En el motor de videojuegos Construct 2, ¿qué objeto deberíamos utilizar para por ejemplo incluir un monstruo o un jugador?",
      options: [
        { text: "Sprite.", correct: true },
        { text: "Main.", correct: false },
        { text: "Player.", correct: false },
      ],
    },
    {
      question:
        "¿Cuál de los siguientes es un formatos de audio sin compresión?",
      options: [
        { text: "FLAC.", correct: false },
        { text: "WAV.", correct: true },
        { text: "MP3.", correct: false },
      ],
    },
    {
      question:
        "¿Con qué sentencia se da permisos de desbloqueo a la clase MediaPlayer en Android?",
      options: [
        { text: "android.permission. WAVE_UNLOCK", correct: false },
        { text: "android.permission.WAVE_LOCK", correct: true },
        { text: "android.permission.GRANT_PERMISSION", correct: false },
      ],
    },
  ],
};

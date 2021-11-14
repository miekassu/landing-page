const {
  AwsCdkTypeScriptApp,
  web,
} = require('projen');

const PROJECT_NAME = 'landing-page';

const frontend = new web.ReactTypeScriptProject({
  defaultReleaseBranch: 'main',
  name: `${PROJECT_NAME}-frontend`,
  deps: [
    'react',
    'react-dom',
  ],
  devDeps: [
    '@types/react',
    '@types/react-dom',
    '@vitejs/plugin-react',
    'typescript',
    'vite',
    'tailwindcss',
    'postcss',
    'autoprefixer',
  ],

  tsconfig: {
    compilerOptions: {
      target: 'ESNext',
      useDefineForClassFields: true,
      lib: [
        'DOM',
        'DOM.Iterable',
        'ESNext',
      ],
      allowJs: false,
      skipLibCheck: false,
      esModuleInterop: false,
      allowSyntheticDefaultImports: true,
      strict: true,
      forceConsistentCasingInFileNames: true,
      module: 'ESNext',
      moduleResolution: 'Node',
      resolveJsonModule: true,
      isolatedModules: true,
      noEmit: true,
      jsx: 'react-jsx',
    },
    include: ['./src'],
  },

  gitignore: [
    '.idea',
    '.env',
  ],

});

const packageJson = frontend.tryFindObjectFile('package.json');
packageJson.addOverride('scripts', {
  dev: 'vite',
  build: 'tsc && vite build',
  serve: 'vite preview',
});

frontend.synth();

const backend = new AwsCdkTypeScriptApp({
  name: `${PROJECT_NAME}-backend`,
  defaultReleaseBranch: 'main',
  parent: frontend,
  outdir: 'backend',

  cdkVersion: '1.121.0',
  deps: [
    'cdk-spa-deploy',
  ],
  cdkDependencies: [
    '@aws-cdk/aws-certificatemanager',
    '@aws-cdk/aws-cloudfront',
    '@aws-cdk/aws-iam',
    '@aws-cdk/aws-route53',
    '@aws-cdk/aws-route53-patterns',
    '@aws-cdk/aws-route53-targets',
    '@aws-cdk/aws-s3',
    '@aws-cdk/aws-s3-deployment',
    '@aws-cdk/core',
  ],
});

backend.synth();
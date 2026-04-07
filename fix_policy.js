const fs = require('fs');
const path = require('path');

const filePath = path.join(process.cwd(), 'src', 'pages', 'Policy.tsx');
let content = fs.readFileSync(filePath, 'utf8');

content = content.replace(
  "import remarkGfm from 'remark-gfm';",
  "import remarkGfm from 'remark-gfm';\nimport { POLICY_CONTENT_EN, POLICY_CONTENT_VI } from '@/lib/i18n/policyContent';"
);

const regex = /const POLICY_CONTENT = `# 📜[\s\S]*?liên hệ Admin qua hệ thống\.`;\n/;
content = content.replace(regex, '');

content = content.replace(
  "const { translations, locale } = useLanguage();",
  "const { translations, locale, localizedPath: lp } = useLanguage();\n  const policyContent = locale === 'vi' ? POLICY_CONTENT_VI : POLICY_CONTENT_EN;"
);

content = content.replace(
  "const toc = useMemo(() => extractToc(POLICY_CONTENT), []);",
  "const toc = useMemo(() => extractToc(policyContent), [policyContent]);"
);

content = content.replace(
  "() => injectHeadingIds(POLICY_CONTENT, toc),",
  "() => injectHeadingIds(policyContent, toc),"
);

content = content.replace(
  "[toc],",
  "[policyContent, toc],"
);

content = content.replace(
  "onClick={() => (window.history.length > 1 ? navigate(-1) : navigate('/'))}",
  "onClick={() => navigate(lp('/'))}"
);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Fixed Policy.tsx');

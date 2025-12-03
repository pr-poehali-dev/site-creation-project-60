import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Article {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
}

const articles: Article[] = [
  {
    id: 1,
    title: 'Современные тренды веб-дизайна 2024',
    excerpt: 'Исследуем актуальные направления в дизайне интерфейсов, цветовые решения и типографику.',
    category: 'Дизайн',
    date: '3 декабря 2024',
    readTime: '5 мин',
    image: 'https://cdn.poehali.dev/projects/82b5f839-ea6f-45f3-ab89-5f84c688a514/files/cbd372fc-a639-481c-8ce6-6f4892a9e7df.jpg'
  },
  {
    id: 2,
    title: 'Как создавать вовлекающий контент',
    excerpt: 'Секреты написания статей, которые читают до конца и делятся с друзьями.',
    category: 'Контент',
    date: '1 декабря 2024',
    readTime: '7 мин',
    image: 'https://cdn.poehali.dev/projects/82b5f839-ea6f-45f3-ab89-5f84c688a514/files/36163b1c-5888-4a4d-9212-8fd5ecca4a38.jpg'
  },
  {
    id: 3,
    title: 'Цифровые технологии будущего',
    excerpt: 'Погружаемся в мир искусственного интеллекта, AR/VR и нейросетей.',
    category: 'Технологии',
    date: '28 ноября 2024',
    readTime: '10 мин',
    image: 'https://cdn.poehali.dev/projects/82b5f839-ea6f-45f3-ab89-5f84c688a514/files/13eb205d-42bb-4908-8ecf-7371ef35cf48.jpg'
  }
];

export default function Index() {
  const [activeSection, setActiveSection] = useState<'home' | 'about' | 'author' | 'publications'>('home');

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      <nav className="sticky top-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Мой Блог
            </h1>
            <div className="flex gap-2">
              <Button
                variant={activeSection === 'home' ? 'default' : 'ghost'}
                onClick={() => setActiveSection('home')}
                className="transition-all duration-300"
              >
                <Icon name="Home" size={18} className="mr-2" />
                Главная
              </Button>
              <Button
                variant={activeSection === 'about' ? 'default' : 'ghost'}
                onClick={() => setActiveSection('about')}
                className="transition-all duration-300"
              >
                <Icon name="BookOpen" size={18} className="mr-2" />
                О блоге
              </Button>
              <Button
                variant={activeSection === 'publications' ? 'default' : 'ghost'}
                onClick={() => setActiveSection('publications')}
                className="transition-all duration-300"
              >
                <Icon name="FileText" size={18} className="mr-2" />
                Публикации
              </Button>
              <Button
                variant={activeSection === 'author' ? 'default' : 'ghost'}
                onClick={() => setActiveSection('author')}
                className="transition-all duration-300"
              >
                <Icon name="User" size={18} className="mr-2" />
                Автор
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-12">
        {activeSection === 'home' && (
          <div className="animate-fade-in space-y-12">
            <section className="text-center py-20 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-3xl blur-3xl"></div>
              <div className="relative z-10">
                <h2 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Идеи, Истории, Вдохновение
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                  Публикую интересные статьи о дизайне, технологиях и креативе
                </p>
                <div className="flex gap-4 justify-center">
                  <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
                    <Icon name="Sparkles" size={20} className="mr-2" />
                    Начать читать
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-2"
                    onClick={() => window.open('https://t.me/olnybuzan', '_blank')}
                  >
                    <Icon name="Send" size={20} className="mr-2" />
                    Мой Телеграм
                  </Button>
                </div>
              </div>
            </section>
          </div>
        )}

        {activeSection === 'about' && (
          <div className="animate-fade-in max-w-4xl mx-auto">
            <Card className="p-8 md:p-12 border-2">
              <div className="space-y-6">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <Icon name="BookOpen" size={32} className="text-white" />
                  </div>
                  <h2 className="text-4xl font-bold">О блоге</h2>
                </div>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Добро пожаловать в мой блог — пространство для обмена идеями, знаниями и вдохновением. 
                  Здесь я делюсь своими мыслями о современном дизайне, технологиях и креативных подходах к созданию контента.
                </p>
                
                <div className="grid md:grid-cols-3 gap-6 py-8">
                  <div className="text-center p-6 rounded-xl bg-primary/5 border border-primary/20">
                    <Icon name="Lightbulb" size={40} className="mx-auto mb-4 text-primary" />
                    <h3 className="font-semibold text-lg mb-2">Идеи</h3>
                    <p className="text-sm text-muted-foreground">Свежие концепции и инновационные решения</p>
                  </div>
                  <div className="text-center p-6 rounded-xl bg-secondary/5 border border-secondary/20">
                    <Icon name="Zap" size={40} className="mx-auto mb-4 text-secondary" />
                    <h3 className="font-semibold text-lg mb-2">Вдохновение</h3>
                    <p className="text-sm text-muted-foreground">Истории успеха и креативные кейсы</p>
                  </div>
                  <div className="text-center p-6 rounded-xl bg-accent/5 border border-accent/20">
                    <Icon name="Target" size={40} className="mx-auto mb-4 text-accent" />
                    <h3 className="font-semibold text-lg mb-2">Практика</h3>
                    <p className="text-sm text-muted-foreground">Реальные инструменты и методики</p>
                  </div>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Моя цель — создать полезный ресурс для всех, кто интересуется дизайном, разработкой и цифровым творчеством. 
                  Каждая статья написана с заботой о читателе и проверена на практике.
                </p>

                <div className="pt-6 border-t">
                  <h3 className="text-xl font-semibold mb-4">Основные темы блога:</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Веб-дизайн', 'UX/UI', 'Типографика', 'Контент-маркетинг', 'Креативность', 'Технологии', 'AI & ML'].map(topic => (
                      <Badge key={topic} variant="outline" className="px-4 py-2 text-sm">
                        {topic}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        )}

        {activeSection === 'author' && (
          <div className="animate-fade-in max-w-4xl mx-auto">
            <Card className="p-8 md:p-12 border-2">
              <div className="space-y-8">
                <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                  <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center text-white text-6xl font-bold shrink-0">
                    АВ
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h2 className="text-4xl font-bold mb-2">Алексей Воронин</h2>
                    <p className="text-xl text-muted-foreground mb-6">
                      Дизайнер, писатель, энтузиаст технологий
                    </p>
                    <div className="flex gap-4 justify-center md:justify-start">
                      <Button variant="outline" size="icon">
                        <Icon name="Twitter" size={20} />
                      </Button>
                      <Button variant="outline" size="icon">
                        <Icon name="Linkedin" size={20} />
                      </Button>
                      <Button variant="outline" size="icon">
                        <Icon name="Github" size={20} />
                      </Button>
                      <Button variant="outline" size="icon">
                        <Icon name="Mail" size={20} />
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <p className="text-lg leading-relaxed">
                    Привет! Я Алексей — дизайнер с 10-летним опытом в создании цифровых продуктов. 
                    Специализируюсь на UI/UX дизайне, брендинге и создании визуальных концепций для стартапов и крупных компаний.
                  </p>

                  <p className="text-lg leading-relaxed">
                    Мой путь в дизайне начался с увлечения типографикой и цветом. 
                    Со временем это переросло в профессиональную карьеру, где я помогаю брендам находить свой уникальный визуальный язык.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 py-6">
                    <div className="p-6 rounded-xl bg-muted/50">
                      <Icon name="Award" size={32} className="mb-4 text-primary" />
                      <h3 className="font-semibold text-lg mb-2">Достижения</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Победитель Awwwards 2023</li>
                        <li>• Спикер на Design Week</li>
                        <li>• 50+ успешных проектов</li>
                      </ul>
                    </div>
                    <div className="p-6 rounded-xl bg-muted/50">
                      <Icon name="Heart" size={32} className="mb-4 text-secondary" />
                      <h3 className="font-semibold text-lg mb-2">Интересы</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Минималистичный дизайн</li>
                        <li>• Современное искусство</li>
                        <li>• Новые технологии</li>
                      </ul>
                    </div>
                  </div>

                  <p className="text-lg leading-relaxed">
                    Через этот блог я делюсь своим опытом, наблюдениями и находками. 
                    Буду рад обратной связи и новым знакомствам!
                  </p>

                  <div className="pt-6 border-t">
                    <h3 className="text-xl font-semibold mb-4">Свяжитесь со мной:</h3>
                    <Button className="bg-gradient-to-r from-primary to-secondary">
                      <Icon name="Mail" size={18} className="mr-2" />
                      hello@myawesomeblog.com
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        )}

        {activeSection === 'publications' && (
          <div className="animate-fade-in max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Публикации</h2>
              <p className="text-lg text-muted-foreground">
                Здесь будут появляться новые статьи и материалы
              </p>
            </div>

            <div className="flex flex-col items-center justify-center py-20">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6">
                <Icon name="FileText" size={64} className="text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">Пока нет публикаций</h3>
              <p className="text-muted-foreground text-center max-w-md mb-8">
                Скоро здесь появятся интересные материалы о дизайне, технологиях и креативе
              </p>
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary">
                <Icon name="Plus" size={20} className="mr-2" />
                Создать первую публикацию
              </Button>
              <p className="text-sm text-muted-foreground mt-8">
                by: in buzanBazzed
              </p>
            </div>
          </div>
        )}
      </main>

      <footer className="mt-20 py-12 border-t bg-muted/20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center gap-6 mb-6">
            <Button variant="ghost" size="icon">
              <Icon name="Twitter" size={20} />
            </Button>
            <Button variant="ghost" size="icon">
              <Icon name="Linkedin" size={20} />
            </Button>
            <Button variant="ghost" size="icon">
              <Icon name="Github" size={20} />
            </Button>
            <Button variant="ghost" size="icon">
              <Icon name="Rss" size={20} />
            </Button>
          </div>
          <p className="text-muted-foreground">
            © 2024 Мой Блог. Создано с 💜 для вдохновения
          </p>
        </div>
      </footer>
    </div>
  );
}
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const equipmentCategories = [
  {
    icon: "Hammer",
    title: "Сваебойные молоты",
    description: "Надежное оборудование для забивки свай",
    link: "#"
  },
  {
    icon: "Building2",
    title: "Копровые мачты",
    description: "Профессиональные мачты для установки свай",
    link: "#"
  },
  {
    icon: "Waves",
    title: "Вибропогружатели экскаваторные",
    description: "Эффективное погружение свай вибрацией",
    link: "#"
  },
  {
    icon: "Truck",
    title: "Сваебойные установки",
    description: "Комплексные решения для свайных работ",
    link: "#"
  },
  {
    icon: "CircleDot",
    title: "Свайные наголовники",
    description: "Качественные наголовники для защиты свай",
    link: "#"
  },
  {
    icon: "Drill",
    title: "Буровые машины",
    description: "Современное буровое оборудование",
    link: "#"
  }
];

const services = [
  "Профессиональные консультации по подбору оборудования и техники",
  "Организацию доставки любым удобным способом (ж/д, морским или автомобильным транспортом) до строительной площадки заказчика",
  "Полное таможенное оформление грузов",
  "Шефмонтажные работы непосредственно на объекте",
  "Сервисное обслуживание и обеспечение запасными частями"
];

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto p-4 md:p-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden animate-fade-in">
          <div className="bg-primary text-white px-6 md:px-12 py-8 md:py-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/10 rounded-full -ml-24 -mb-24"></div>
            
            <div className="relative z-10">
              <div className="flex items-start justify-between flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-4">
                  <img 
                    src="https://cdn.poehali.dev/files/KGS_logo_white_yellow.png" 
                    alt="КГС" 
                    className="h-16 md:h-20 w-auto"
                  />
                  <Badge className="bg-secondary text-white border-0 text-sm font-semibold px-4 py-2 hover:bg-secondary/90">
                    10+ лет на рынке
                  </Badge>
                </div>
              </div>
              
              <h1 className="font-heading text-3xl md:text-5xl font-bold mb-4 leading-tight">
                КоперГруппСервис — надежный партнер в оборудовании для свайного фундаментостроения
              </h1>
              
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                Торгово-производственная компания с более чем 10-летним опытом успешной работы в сфере оборудования для фундаментостроения.
              </p>
            </div>
          </div>

          <div className="p-6 md:p-12">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary mb-8 flex items-center gap-3">
              <Icon name="Package" className="text-secondary" size={32} />
              Каталог оборудования
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {equipmentCategories.map((category, index) => (
                <Card 
                  key={index} 
                  className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-transparent hover:border-secondary/20 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/20 transition-colors">
                        <Icon name={category.icon as any} className="text-secondary" size={28} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-heading font-bold text-lg text-primary mb-2 group-hover:text-secondary transition-colors">
                          {category.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                          {category.description}
                        </p>
                        <Button 
                          variant="ghost" 
                          className="text-secondary hover:text-secondary/80 hover:bg-secondary/10 p-0 h-auto font-semibold group/btn"
                        >
                          Подробнее 
                          <Icon name="ArrowRight" className="ml-1 group-hover/btn:translate-x-1 transition-transform" size={16} />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 md:p-10 mb-12 border border-primary/10">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary mb-6">
                Комплексное обслуживание от нашей компании включает:
              </h2>
              
              <div className="space-y-4">
                {services.map((service, index) => (
                  <div 
                    key={index} 
                    className="flex items-start gap-4 group animate-fade-in"
                    style={{ animationDelay: `${(index + 6) * 0.1}s` }}
                  >
                    <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon name="Check" className="text-white" size={16} />
                    </div>
                    <p className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors">
                      {service}
                    </p>
                  </div>
                ))}
              </div>
              
              <p className="text-gray-800 font-medium mt-8 text-lg leading-relaxed">
                Мы предлагаем полный цикл услуг под ключ, обеспечивая наших клиентов всем необходимым для успешной реализации строительных проектов.
              </p>
            </div>

            <div className="bg-white border-2 border-primary/20 rounded-2xl p-8 md:p-10 mb-8">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary mb-6 text-center">
                Свяжитесь с нами
              </h2>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-secondary hover:bg-secondary/90 text-white font-semibold text-base px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 group"
                >
                  <Icon name="BookOpen" className="mr-2 group-hover:scale-110 transition-transform" size={20} />
                  Получить каталог
                </Button>
                
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-white font-semibold text-base px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 group"
                >
                  <Icon name="MessageCircle" className="mr-2 group-hover:scale-110 transition-transform" size={20} />
                  Получить консультацию
                </Button>
                
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-white font-semibold text-base px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 group"
                >
                  <Icon name="Phone" className="mr-2 group-hover:rotate-12 transition-transform" size={20} />
                  8 (800) 600-74-65
                </Button>
              </div>
            </div>

            <div className="text-center py-8 border-t border-gray-200">
              <div className="flex items-center justify-center gap-3 mb-3">
                <img 
                  src="https://cdn.poehali.dev/files/KGS_logo_white_yellow.png" 
                  alt="КГС" 
                  className="h-12 w-auto brightness-0 opacity-80"
                />
              </div>
              <h3 className="font-heading text-xl font-bold text-primary mb-2">
                КоперГруппСервис
              </h3>
              <p className="text-gray-600 mb-4">
                Надежный партнер в оборудовании для свайного фундаментостроения
              </p>
              <Button 
                variant="link" 
                className="text-secondary hover:text-secondary/80 font-semibold group"
              >
                Посетить сайт
                <Icon name="ExternalLink" className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={16} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

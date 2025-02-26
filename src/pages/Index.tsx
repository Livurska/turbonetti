
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Rocket, DollarSign, Check, MessageSquare } from "lucide-react";

const Index = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    description: "",
    budget: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Kiitos yhteydenotosta!",
      description: "Olemme sinuun yhteydessä pian.",
    });
    
    setFormData({
      name: "",
      email: "",
      phone: "",
      description: "",
      budget: "",
    });
    
    setIsSubmitting(false);
  };

  const features = [
    {
      icon: Rocket,
      title: "Nopea toteutus",
      description: "Toimitamme nettisivusi nopeammin kuin kilpailijat"
    },
    {
      icon: DollarSign,
      title: "Kilpailukykyinen hinta",
      description: "Laadukkaat sivut kohtuulliseen hintaan"
    },
    {
      icon: Check,
      title: "Korkea laatu",
      description: "Modernit ja responsiiviset nettisivut"
    }
  ];

  return (
    <div className="min-h-screen w-full">
      {/* Hero Section */}
      <section className="hero-gradient px-4 py-20 sm:py-32">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-4xl sm:text-6xl font-bold mb-6 text-gray-900">
            Modernit nettisivut nopeasti
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-8">
            Turbosivut toteuttaa yrityksesi verkkopalvelut tehokkaasti ja edullisesti
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-primary hover:bg-primary/90 rounded-full transition-colors"
          >
            Pyydä tarjous
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="glass-card p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <feature.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 px-4 bg-muted">
        <div className="max-w-2xl mx-auto glass-card rounded-2xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Ota yhteyttä</h2>
            <p className="text-gray-600">
              Kerro meille projektistasi, niin autamme sinua
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Nimi
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Sähköposti
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Puhelinnumero
              </label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                required
              />
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                Projektin kuvaus
              </label>
              <textarea
                id="description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows={4}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                required
              />
            </div>

            <div>
              <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">
                Budjetti (€)
              </label>
              <input
                type="number"
                id="budget"
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                required
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-3 text-lg font-medium text-white bg-primary hover:bg-primary/90 rounded-full transition-colors disabled:opacity-50"
            >
              {isSubmitting ? "Lähetetään..." : "Lähetä viesti"}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Index;

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MessageCircle } from "lucide-react";
import { toast } from "sonner";

/**
 * Design Philosophy: Minimalismo Terapêutico
 * Componente de Formulário de Contato
 */

const formSchema = z.object({
  name: z.string().min(2, { message: "O nome deve ter pelo menos 2 caracteres." }),
  email: z.string().email({ message: "Por favor, insira um email válido." }),
  message: z.string().min(10, { message: "A mensagem deve ter pelo menos 10 caracteres." }),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormValues) => {
    try {
      // NOTE: Using mailto: is not reliable. It's better to send this data to a server endpoint
      // that handles sending the email. This provides a much better user experience.
      const mailtoLink = `mailto:sarecoveryporto@gmail.com?subject=Contato%20de%20${encodeURIComponent(
        data.name
      )}&body=${encodeURIComponent(
        `Nome: ${data.name}\nEmail: ${data.email}\n\nMensagem:\n${data.message}`
      )}`;

      window.location.href = mailtoLink;

      toast.success("Abrindo seu cliente de email para enviar a mensagem!");
      reset();

    } catch (error) {
      toast.error("Erro ao preparar o email. Tente novamente.");
    }
  };

  return (
    <div className="bg-white rounded-lg border border-[#E8EDF3] p-8">
      <h3 className="text-2xl font-bold text-[#2C3E50] mb-6">Solicite o Link do Zoom</h3>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mb-8">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-[#2C3E50] mb-2">
            Seu Nome
          </label>
          <input
            type="text"
            id="name"
            {...register("name")}
            placeholder="Digite seu nome (pode ser fictício)"
            className="w-full px-4 py-3 border border-[#E8EDF3] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A90A4] bg-white text-[#2C3E50]"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-[#2C3E50] mb-2">
            Seu Email
          </label>
          <input
            type="email"
            id="email"
            {...register("email")}
            placeholder="seu.email@exemplo.com"
            className="w-full px-4 py-3 border border-[#E8EDF3] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A90A4] bg-white text-[#2C3E50]"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-[#2C3E50] mb-2">
            Mensagem
          </label>
          <textarea
            id="message"
            rows={4}
            {...register("message")}
            placeholder="Escreva uma breve mensagem..."
            className="w-full px-4 py-3 border border-[#E8EDF3] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A90A4] bg-white text-[#2C3E50]"
          ></textarea>
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#4A90A4] hover:bg-[#3A7A94] text-white px-8 py-6 text-lg rounded-lg transition-all hover:shadow-lg disabled:bg-gray-400"
        >
          {isSubmitting ? "Enviando..." : "Solicitar Link"}
        </Button>
      </form>

      {/* Alternative Contact Methods */}
      <div className="border-t border-[#E8EDF3] pt-8">
        <p className="text-sm text-[#7A8FA3] mb-4 font-semibold">Ou entre em contato conosco diretamente:</p>
        <div className="space-y-3">
          <a
            href="https://wa.me/5599984687433?text=Olá,%20gostaria%20de%20receber%20o%20link%20do%20Zoom%20para%20as%20reuniões%20de%20SA%20Porto"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 bg-[#F5F7FA] hover:bg-[#E8EDF3] rounded-lg transition-colors"
          >
            <MessageCircle className="w-5 h-5 text-[#4A90A4]" />
            <div>
              <p className="font-semibold text-[#2C3E50]">WhatsApp</p>
              <p className="text-sm text-[#7A8FA3]">+351 925381811</p>
            </div>
          </a>

          <a
            href="mailto:sarecoveryporto@gmail.com"
            className="flex items-center gap-3 p-4 bg-[#F5F7FA] hover:bg-[#E8EDF3] rounded-lg transition-colors"
          >
            <Mail className="w-5 h-5 text-[#4A90A4]" />
            <div>
              <p className="font-semibold text-[#2C3E50]">Email</p>
              <p className="text-sm text-[#7A8FA3]">sarecoveryporto@gmail.com</p>
            </div>
          </a>

          <a
            href="tel:+5599984687433"
            className="flex items-center gap-3 p-4 bg-[#F5F7FA] hover:bg-[#E8EDF3] rounded-lg transition-colors"
          >
            <Phone className="w-5 h-5 text-[#4A90A4]" />
            <div>
              <p className="font-semibold text-[#2C3E50]">Telefone</p>
              <p className="text-sm text-[#7A8FA3]">+351 925381811</p>
            </div>
          </a>
        </div>
      </div>

      {/* Privacy Note */}
      <div className="mt-8 p-4 bg-[#F5F7FA] rounded-lg border border-[#E8EDF3]">
        <p className="text-xs text-[#7A8FA3]">
          <strong>Privacidade:</strong> Suas informações são confidenciais e serão usadas apenas para enviar o link do Zoom. Seu anonimato é protegido.
        </p>
      </div>
    </div>
  );
}

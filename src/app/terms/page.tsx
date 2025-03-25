"use client"

import type React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { FaChevronRight, FaShieldAlt, FaExclamationTriangle, FaFileContract, FaGavel } from "react-icons/fa"
import PriveTermsSection from "@/components/PrivacySection"

export default function TermsPage() {
  const currentYear = new Date().getFullYear()
  const lastUpdated = "15 de Março de 2024"

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-blue-50 pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <div className="inline-block p-2 bg-blue-100 text-[#034C8C] rounded-full mb-4">
              <FaFileContract className="w-6 h-6" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-[#034C8C] mb-4">Termos de Uso</h1>
            <p className="text-gray-600">Última atualização: {lastUpdated}</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700">
                Bem-vindo ao YKMiniURL. Estes Termos de Uso regem seu acesso e uso do site YKMiniURL, serviços,
                aplicativos e ferramentas coletivamente, os Serviços. Ao acessar ou usar nossos Serviços, você
                concorda com estes Termos de Uso. Se você não concordar com estes termos, não use nossos Serviços.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            {/* 1. Aceitação dos Termos */}
            <PriveTermsSection
              icon={<FaGavel />}
              title="1. Aceitação dos Termos"
              content={
                <div className="space-y-4">
                  <p>
                    Ao acessar ou usar o YKMiniURL, você confirma que leu, entendeu e concorda em ficar vinculado a
                    estes Termos de Uso, nossa Política de Privacidade e quaisquer termos adicionais aplicáveis. Se você
                    estiver usando o serviço em nome de uma organização, você confirma que tem autoridade para vincular
                    essa organização a estes termos.
                  </p>
                  <p>
                    Reservamo-nos o direito de modificar estes termos a qualquer momento. As modificações entrarão em
                    vigor imediatamente após a publicação dos termos atualizados. Seu uso continuado dos Serviços após
                    tais modificações constitui sua aceitação dos novos termos.
                  </p>
                </div>
              }
            />

            {/* 2. Descrição do Serviço */}
            <PriveTermsSection
              icon={<FaChevronRight />}
              title="2. Descrição do Serviço"
              content={
                <div className="space-y-4">
                  <p>
                    O YKMiniURL é um serviço de encurtamento de URLs que permite aos usuários criar versões mais curtas
                    de URLs longos. Nossos serviços incluem:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Encurtamento de links longos</li>
                    <li>Proteção de links com senha</li>
                    <li>Estatísticas de acesso aos links</li>
                    <li>API para desenvolvedores</li>
                  </ul>
                  <p>
                    Embora nos esforcemos para manter o serviço disponível 24 horas por dia, não podemos garantir que o
                    serviço estará disponível ininterruptamente ou sem erros. Reservamo-nos o direito de modificar,
                    suspender ou descontinuar qualquer aspecto do serviço a qualquer momento.
                  </p>
                </div>
              }
            />

            {/* 3. Registro e Conta */}
            <PriveTermsSection
              icon={<FaChevronRight />}
              title="3. Registro e Conta"
              content={
                <div className="space-y-4">
                  <p>
                    Alguns recursos do YKMiniURL podem exigir registro. Ao se registrar, você concorda em fornecer
                    informações precisas, atuais e completas. Você é responsável por manter a confidencialidade de sua
                    senha e por todas as atividades que ocorrem em sua conta.
                  </p>
                  <p>
                    Você concorda em notificar-nos imediatamente sobre qualquer uso não autorizado de sua conta ou
                    qualquer outra violação de segurança. Não seremos responsáveis por quaisquer perdas resultantes do
                    uso não autorizado de sua conta.
                  </p>
                </div>
              }
            />

            {/* 4. Uso Aceitável */}
            <PriveTermsSection
              icon={<FaShieldAlt />}
              title="4. Uso Aceitável"
              content={
                <div className="space-y-4">
                  <p>
                    Você concorda em usar o YKMiniURL apenas para fins legais e de acordo com estes Termos de Uso. Você
                    não deve usar nossos Serviços para:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Violar leis ou regulamentos aplicáveis</li>
                    <li>Infringir direitos de propriedade intelectual</li>
                    <li>Distribuir malware, vírus ou qualquer código malicioso</li>
                    <li>Enviar spam, phishing ou tentativas de fraude</li>
                    <li>Distribuir material pornográfico, violento ou ofensivo</li>
                    <li>Promover discurso de ódio ou discriminação</li>
                    <li>Enganar ou confundir os usuários sobre a natureza do conteúdo vinculado</li>
                    <li>Interferir na operação normal do serviço</li>
                  </ul>
                  <p>
                    Reservamo-nos o direito de remover qualquer URL que, a nosso critério exclusivo, viole estes termos
                    ou seja de outra forma prejudicial aos nossos usuários ou ao serviço.
                  </p>
                  <p className="font-medium text-[#BF2C0B]">
                    Importante: Não temos acesso às senhas que você utiliza para proteger seus links. Todas as senhas
                    são criptografadas e armazenadas de forma segura. Coletamos apenas as informações mínimas
                    necessárias para fornecer o serviço de encurtamento de URLs.
                  </p>
                </div>
              }
            />

            {/* 5. Propriedade Intelectual */}
            <PriveTermsSection
              icon={<FaChevronRight />}
              title="5. Propriedade Intelectual"
              content={
                <div className="space-y-4">
                  <p>
                    O YKMiniURL e todo o conteúdo, recursos e funcionalidades (incluindo, mas não se limitando a,
                    textos, gráficos, logotipos, ícones e imagens) são de propriedade do YKMiniURL, seus licenciadores
                    ou outros provedores de tal material e são protegidos por direitos autorais, marcas registradas e
                    outras leis de propriedade intelectual.
                  </p>
                  <p>
                    Você não pode reproduzir, distribuir, modificar, criar trabalhos derivados, exibir publicamente,
                    executar publicamente, republicar, baixar, armazenar ou transmitir qualquer material de nosso
                    serviço, exceto conforme permitido por estes Termos de Uso.
                  </p>
                </div>
              }
            />

            {/* 6. Privacidade */}
            <PriveTermsSection
              icon={<FaChevronRight />}
              title="6. Privacidade"
              content={
                <div className="space-y-4">
                  <p>
                    Sua privacidade é importante para nós. Nossa Política de Privacidade, que está incorporada a estes
                    Termos de Uso, descreve nossas práticas relacionadas à coleta, uso e divulgação de suas informações
                    pessoais.
                  </p>
                  <p>
                    Coletamos apenas as informações mínimas necessárias para fornecer nossos serviços: os links que você
                    deseja encurtar e, opcionalmente, senhas criptografadas para proteger esses links. Não coletamos
                    dados de localização, informações pessoais identificáveis ou outros dados além do estritamente
                    necessário.
                  </p>
                  <p>
                    Ao usar nossos Serviços, você concorda com a coleta e uso de informações de acordo com nossa
                    Política de Privacidade.
                  </p>
                </div>
              }
            />

            {/* 7. Limitação de Responsabilidade */}
            <PriveTermsSection
              icon={<FaExclamationTriangle />}
              title="7. Limitação de Responsabilidade"
              content={
                <div className="space-y-4">
                  <p>
                    EM NENHUMA CIRCUNSTÂNCIA O YKMINIURL, SEUS DIRETORES, FUNCIONÁRIOS, PARCEIROS, AGENTES, FORNECEDORES
                    OU AFILIADOS SERÃO RESPONSÁVEIS POR QUAISQUER DANOS INDIRETOS, INCIDENTAIS, ESPECIAIS,
                    CONSEQUENCIAIS OU PUNITIVOS, INCLUINDO, SEM LIMITAÇÃO, PERDA DE LUCROS, DADOS, USO, BOA VONTADE OU
                    OUTRAS PERDAS INTANGÍVEIS, RESULTANTES DE:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Seu acesso ou uso ou incapacidade de acessar ou usar o serviço</li>
                    <li>Qualquer conduta ou conteúdo de terceiros no serviço</li>
                    <li>Conteúdo obtido do serviço</li>
                    <li>Acesso não autorizado, uso ou alteração de suas transmissões ou conteúdo</li>
                  </ul>
                  <p>
                    Esta limitação de responsabilidade se aplica independentemente da teoria legal de responsabilidade e
                    mesmo se o YKMiniURL tiver sido avisado da possibilidade de tais danos.
                  </p>
                </div>
              }
            />

            {/* 8. Isenção de Garantias */}
            <PriveTermsSection
              icon={<FaExclamationTriangle />}
              title="8. Isenção de Garantias"
              content={
                <div className="space-y-4">
                  <p>
                    O SERVIÇO É FORNECIDO COMO ESTÁ E CONFORME DISPONÍVEL, SEM GARANTIAS DE QUALQUER TIPO, EXPRESSAS
                    OU IMPLÍCITAS. O YKMINIURL EXPRESSAMENTE SE ISENTA DE TODAS AS GARANTIAS DE QUALQUER TIPO, SEJAM
                    EXPRESSAS OU IMPLÍCITAS, INCLUINDO, MAS NÃO SE LIMITANDO A, GARANTIAS IMPLÍCITAS DE COMERCIALIZAÇÃO,
                    ADEQUAÇÃO A UM PROPÓSITO ESPECÍFICO, NÃO VIOLAÇÃO E QUAISQUER OUTRAS GARANTIAS QUE POSSAM SURGIR NO
                    CURSO DE NEGOCIAÇÃO OU USO COMERCIAL.
                  </p>
                  <p>
                    O YKMiniURL não garante que o serviço atenderá aos seus requisitos, que o serviço será ininterrupto,
                    oportuno, seguro ou livre de erros, ou que os resultados que possam ser obtidos do uso do serviço
                    serão precisos ou confiáveis.
                  </p>
                </div>
              }
            />

            {/* 9. Indenização */}
            <PriveTermsSection
              icon={<FaChevronRight />}
              title="9. Indenização"
              content={
                <div className="space-y-4">
                  <p>
                    Você concorda em defender, indenizar e isentar o YKMiniURL, seus diretores, funcionários, parceiros,
                    agentes, contratados, licenciadores, prestadores de serviços, subcontratados, fornecedores e
                    afiliados de e contra quaisquer reclamações, responsabilidades, danos, julgamentos, prêmios, perdas,
                    custos, despesas ou honorários (incluindo honorários advocatícios razoáveis) decorrentes de ou
                    relacionados à sua violação destes Termos de Uso ou seu uso do serviço.
                  </p>
                </div>
              }
            />

            {/* 10. Rescisão */}
            <PriveTermsSection
              icon={<FaChevronRight />}
              title="10. Rescisão"
              content={
                <div className="space-y-4">
                  <p>
                    Podemos encerrar ou suspender seu acesso ao serviço imediatamente, sem aviso prévio ou
                    responsabilidade, por qualquer motivo, incluindo, sem limitação, se você violar os Termos de Uso.
                  </p>
                  <p>
                    Após a rescisão, seu direito de usar o serviço cessará imediatamente. Se você deseja encerrar sua
                    conta, você pode simplesmente descontinuar o uso do serviço.
                  </p>
                </div>
              }
            />

            {/* 11. Lei Aplicável */}
            <PriveTermsSection
              icon={<FaGavel />}
              title="11. Lei Aplicável"
              content={
                <div className="space-y-4">
                  <p>
                    Estes Termos de Uso serão regidos e interpretados de acordo com as leis do Brasil, sem considerar
                    suas disposições de conflito de leis.
                  </p>
                  <p>
                    Qualquer disputa legal decorrente ou relacionada a estes Termos de Uso será submetida à jurisdição
                    exclusiva dos tribunais localizados no Brasil.
                  </p>
                </div>
              }
            />

            {/* 12. Alterações nos Termos */}
            <PriveTermsSection
              icon={<FaChevronRight />}
              title="12. Alterações nos Termos"
              content={
                <div className="space-y-4">
                  <p>
                    Reservamo-nos o direito, a nosso critério exclusivo, de modificar ou substituir estes Termos de Uso
                    a qualquer momento. Se uma revisão for material, tentaremos fornecer um aviso com pelo menos 30 dias
                    de antecedência antes que quaisquer novos termos entrem em vigor.
                  </p>
                  <p>
                    O que constitui uma alteração material será determinado a nosso critério exclusivo. Ao continuar a
                    acessar ou usar nosso serviço após essas revisões se tornarem efetivas, você concorda em ficar
                    vinculado aos termos revisados.
                  </p>
                </div>
              }
            />

            {/* 13. Contato */}
            <PriveTermsSection
              icon={<FaChevronRight />}
              title="13. Contato"
              content={
                <div className="space-y-4">
                  <p>Se você tiver alguma dúvida sobre estes Termos de Uso, entre em contato conosco:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Por e-mail: contato@ykminiurl.com.br</li>
                    <li>Pelo formulário de contato em nosso site</li>
                  </ul>
                </div>
              }
            />
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">Ao usar o YKMiniURL, você concorda com estes Termos de Uso.</p>
            <Link href="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-[#034C8C] text-white font-bold rounded-full text-lg shadow-lg hover:shadow-xl transition-all"
              >
                Voltar para a página inicial
              </motion.button>
            </Link>
          </div>

          <div className="mt-12 text-center text-gray-500 text-sm">
            <p>© {currentYear} YKMiniURL. Todos os direitos reservados.</p>
          </div>
        </motion.div>
      </div>
    </main>
  )
}



"use client";

import type React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaUserShield,
  FaDatabase,
  FaCookieBite,
  FaGlobe,
  FaUserLock,
} from "react-icons/fa";
import PriveTermsSection from "../../components/PrivacySection";

const PrivacyPage = () => {
  const currentYear = new Date().getFullYear();
  const lastUpdated = "15 de Março de 2024";

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
              <FaShieldAlt className="w-6 h-6" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-[#034C8C] mb-4">
              Política de Privacidade
            </h1>
            <p className="text-gray-600">Última atualização: {lastUpdated}</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700">
                A YKMiniURL está comprometida em proteger sua privacidade. Esta
                Política de Privacidade explica como coletamos, usamos,
                divulgamos e protegemos suas informações quando você utiliza
                nosso serviço de encurtamento de URLs. Ao utilizar o YKMiniURL,
                você concorda com a coleta e uso de informações de acordo com
                esta política.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            {/* 1. Informações que Coletamos */}
            <PriveTermsSection
              icon={<FaUserShield />}
              title="1. Informações que Coletamos"
              content={
                <div className="space-y-4">
                  <p>
                    Coletamos apenas as informações mínimas necessárias para
                    fornecer nosso serviço:
                  </p>
                  <h3 className="font-semibold text-[#034C8C]">
                    1.1. Informações fornecidas por você
                  </h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>URLs que você deseja encurtar</li>
                    <li>
                      Senhas para proteger links (se você optar por esta
                      funcionalidade) -{" "}
                      <strong>
                        Importante: todas as senhas são criptografadas e não
                        temos acesso a elas
                      </strong>
                    </li>
                  </ul>

                  <h3 className="font-semibold text-[#034C8C]">
                    1.2. Informações coletadas automaticamente
                  </h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      Informações básicas de acesso necessárias para o
                      funcionamento do serviço
                    </li>
                    <li>
                      Estatísticas de cliques em links encurtados (apenas
                      contagem numérica)
                    </li>
                  </ul>

                  <p className="bg-blue-50 p-4 rounded-lg border-l-4 border-[#034C8C] mt-4">
                    <strong>Importante:</strong> Não coletamos dados de
                    localização, informações demográficas, comportamentais ou
                    quaisquer dados pessoais identificáveis além do estritamente
                    necessário para fornecer o serviço de encurtamento de URLs.
                  </p>
                </div>
              }
            />

            {/* 2. Como Usamos Suas Informações */}
            <PriveTermsSection
              icon={<FaDatabase />}
              title="2. Como Usamos Suas Informações"
              content={
                <div className="space-y-4">
                  <p>Utilizamos as informações coletadas apenas para:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      Fornecer, manter e melhorar nosso serviço de encurtamento
                      de URLs
                    </li>
                    <li>Processar e encurtar URLs</li>
                    <li>
                      Fornecer estatísticas básicas sobre os links encurtados
                      (apenas contagem de cliques)
                    </li>
                    <li>
                      Proteger links com senha quando solicitado (usando
                      criptografia segura)
                    </li>
                    <li>Detectar, prevenir e resolver problemas técnicos</li>
                  </ul>
                  <p className="font-medium">
                    Não utilizamos suas informações para marketing, publicidade
                    direcionada ou qualquer finalidade além das listadas acima.
                  </p>
                </div>
              }
            />

            {/* 3. Cookies e Tecnologias Semelhantes */}
            <PriveTermsSection
              icon={<FaCookieBite />}
              title="3. Cookies e Tecnologias Semelhantes"
              content={
                <div className="space-y-4">
                  <p>
                    Utilizamos apenas cookies essenciais para o funcionamento
                    básico do site. Estes cookies são necessários para que o
                    serviço funcione corretamente e não podem ser desativados.
                  </p>
                  <p>
                    Não utilizamos cookies para rastreamento, marketing ou
                    análise comportamental. Nosso objetivo é manter a coleta de
                    dados no mínimo necessário para fornecer o serviço.
                  </p>
                  <p>
                    Você pode controlar e gerenciar cookies nas configurações do
                    seu navegador. No entanto, desabilitar certos cookies pode
                    afetar a funcionalidade do nosso serviço.
                  </p>
                </div>
              }
            />

            {/* 4. Compartilhamento de Informações */}
            <PriveTermsSection
              icon={<FaGlobe />}
              title="4. Compartilhamento de Informações"
              content={
                <div className="space-y-4">
                  <p>
                    Não vendemos, comercializamos ou transferimos suas
                    informações a terceiros. As únicas exceções são:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <strong>Prestadores de serviços essenciais:</strong>{" "}
                      Apenas serviços de hospedagem e infraestrutura necessários
                      para operar o site.
                    </li>
                    <li>
                      <strong>Conformidade legal:</strong> Podemos divulgar
                      informações quando obrigados por lei ou ordem judicial.
                    </li>
                  </ul>
                  <p className="font-medium">
                    Não compartilhamos informações para fins de marketing,
                    publicidade ou análise de dados.
                  </p>
                </div>
              }
            />

            {/* 5. Segurança de Dados */}
            <PriveTermsSection
              icon={<FaUserLock />}
              title="5. Segurança de Dados"
              content={
                <div className="space-y-4">
                  <p>
                    Implementamos medidas de segurança adequadas para proteger
                    suas informações:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <strong>Criptografia de senhas:</strong> Todas as senhas
                      utilizadas para proteger links são criptografadas. Não
                      temos acesso às senhas originais.
                    </li>
                    <li>Proteção SSL para transmissão de dados</li>
                    <li>Acesso restrito a informações</li>
                    <li>
                      Monitoramento regular de sistemas para detectar
                      vulnerabilidades
                    </li>
                  </ul>
                  <p>
                    Mantemos apenas as informações mínimas necessárias para o
                    funcionamento do serviço, reduzindo assim os riscos
                    associados ao armazenamento de dados.
                  </p>
                </div>
              }
            />

            {/* 6. Seus Direitos de Privacidade */}
            <PriveTermsSection
              icon={<FaUserShield />}
              title="6. Seus Direitos de Privacidade"
              content={
                <div className="space-y-4">
                  <p>
                    Dependendo da sua localização, você pode ter certos direitos
                    relacionados às suas informações pessoais, incluindo:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Direito de acesso às suas informações pessoais</li>
                    <li>Direito de retificar informações imprecisas</li>
                    <li>Direito de apagar suas informações pessoais</li>
                    <li>
                      Direito de restringir o processamento de suas informações
                    </li>
                    <li>Direito à portabilidade de dados</li>
                    <li>
                      Direito de se opor ao processamento de suas informações
                    </li>
                    <li>Direito de retirar o consentimento</li>
                  </ul>
                  <p>
                    Para exercer qualquer um desses direitos, entre em contato
                    conosco através das informações fornecidas na seção Contato abaixo.
                  </p>
                </div>
              }
            />

            {/* 7. Retenção de Dados */}
            <PriveTermsSection
              icon={<FaDatabase />}
              title="7. Retenção de Dados"
              content={
                <div className="space-y-4">
                  <p>
                    Mantemos suas informações pessoais apenas pelo tempo
                    necessário para os fins estabelecidos nesta Política de
                    Privacidade, a menos que um período de retenção mais longo
                    seja exigido ou permitido por lei.
                  </p>
                  <p>
                    Para links encurtados sem conta de usuário, mantemos as
                    informações por um período de até 2 anos após o último
                    acesso ao link. Para contas de usuário, mantemos as
                    informações enquanto a conta estiver ativa e por um período
                    razoável após o encerramento da conta.
                  </p>
                </div>
              }
            />

            {/* 8. Crianças */}
            <PriveTermsSection
              icon={<FaUserShield />}
              title="8. Crianças"
              content={
                <div className="space-y-4">
                  <p>
                    Nossos serviços não são direcionados a pessoas menores de 13
                    anos. Não coletamos intencionalmente informações pessoais
                    identificáveis de crianças menores de 13 anos. Se você é pai
                    ou responsável e acredita que seu filho nos forneceu
                    informações pessoais, entre em contato conosco para que
                    possamos tomar as medidas necessárias.
                  </p>
                </div>
              }
            />

            {/* 9. Alterações nesta Política de Privacidade */}
            <PriveTermsSection
              icon={<FaGlobe />}
              title="9. Alterações nesta Política de Privacidade"
              content={
                <div className="space-y-4">
                  <p>
                    Podemos atualizar nossa Política de Privacidade
                    periodicamente. Notificaremos você sobre quaisquer
                    alterações publicando a nova Política de Privacidade nesta
                    página e, se as alterações forem significativas, enviaremos
                    uma notificação por e-mail ou através de um aviso em nosso
                    site.
                  </p>
                  <p>
                    Recomendamos que você revise esta Política de Privacidade
                    periodicamente para quaisquer alterações. Alterações nesta
                    Política de Privacidade são efetivas quando publicadas nesta
                    página.
                  </p>
                </div>
              }
            />

            {/* 10. Contato */}
            <PriveTermsSection
              icon={<FaUserShield />}
              title="10. Contato"
              content={
                <div className="space-y-4">
                  <p>
                    Se você tiver alguma dúvida sobre esta Política de
                    Privacidade, entre em contato conosco:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Por e-mail: privacidade@ykminiurl.com.br</li>
                    <li>Pelo formulário de contato em nosso site</li>
                  </ul>
                </div>
              }
            />
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">
              Ao usar o YKMiniURL, você concorda com nossa Política de
              Privacidade.
            </p>
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
  );
};

export default PrivacyPage;

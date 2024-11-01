import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ImagePicker, ScrollView} from 'react-native';
import documentovan from '/assets/documentovanimage.png';
import logo from '/assets/logo.png';

const App = () => {

  const longText= 'Criar os Termos e Condições. Termos e Condições são um conjunto de termos legais definidos pelo proprietário de um site. Eles estabelecem os Termos e Condições que regem as atividades dos visitantes no referido site e a relação entre os visitantes e o proprietário do site. Os termos devem ser definidos de acordo com as necessidades específicas e a natureza de cada site. Por exemplo, um site que ofereça produtos a clientes em transações de comércio eletrônico exige Termos que sejam diferentes dos Termos de um site que fornecem apenas informações. Os Termos são um acordo entre o proprietário do site e os usuários do site; eles detalham as políticas e procedimentos realizados pelo site. De muitas maneiras, os Termos fornecem ao proprietário do site a capacidade de se proteger de possíveis exposições legais. Além disso, há obrigações legais de notificar os usuários do site sobre essas atividades e, em muitos casos, os Termos são o local para isso.Portanto, é muito importante e altamente recomendável que os sites tenham Termos claros e abrangentes que sejam ajustados e adaptados ao site específico e suas atividades. Importante: As explicações e informações fornecidas aqui são apenas explicações gerais, informações e amostras. Você não deve confiar neste artigo como aconselhamento jurídico ou como recomendações sobre o que você deve realmente fazer. Recomendamos que você procure aconselhamento jurídico para ajudá-lo a entender e auxiliá-lo na criação de seus Termos. O que você deve abordar em seus Termos? A seguir você verá uma lista de problemas que normalmente são tratados em Termos para sites. É claro que alguns dos problemas podem não ser relevantes para o seu website (por exemplo, as políticas de reembolso não são relevantes para um site que não realize vendas) e pode haver termos obrigatórios para o seu site que não são mencionados abaixo. O que se segue é apenas um esboço limitado e uma ilustração dos principais problemas normalmente tratados nos Termos para sites. Proprietário do site, a oferta e a vinculação de Termos. Como em todos os contratos, os Termos precisam declarar claramente o proprietário do site, o que o site oferece e os Termos sendo um acordo vinculativo para os usuários do site. Se o site for operado por uma entidade legal, é importante declarar o nome completo e preciso dessa entidade (e não o nome comercial usado para a atividade comercial). Também é importante definir o que é oferecido no site e afirmar que os Termos são um contrato legal que controla o uso do site por visitantes e usuários dos serviços. Exemplo:Este site pertence e é operado por [nome da operadora do seu site]. Estes Termos estabelecem os Termos e Condições sob os quais você pode utilizar nosso site e serviços oferecidos por nós. Este site oferece aos visitantes [descrição do que é oferecido em seu site]. Ao acessar ou usar o website do nosso serviço, você aprova que leu, entendeu e concorda em ficar vinculado a estes Termos. Quem pode usar seu site; Quais são os requisitos para criar uma conta Você deve definir quem tem direito e permissão para usar o site e os serviços e, quando relevante, quais são os requisitos para abrir uma conta. Exemplo:Para usar nosso site e / ou receber nossos serviços, você deve ter pelo menos [adicionar número] anos de idade ou ter a idade legal de maioridade em sua jurisdição, e possuir a autoridade legal, o direito e a liberdade de participar desses serviços. Você não tem permissão para usar este website e / ou receber serviços se isso for proibido em seu país ou sob qualquer lei ou regulamento aplicável a você. Principais termos comerciais oferecidos aos clientes Se o site incluir a venda de produtos e / ou serviços, os Termos deverão incluir os principais termos comerciais para compra ou licenciamento de tais serviços. Por exemplo, se o site oferecer assinaturas de um produto ou serviço, os Termos precisarão definir os termos desse licenciamento, as taxas pagas e os termos da renovação da assinatura. Se o site oferecer produtos ou mercadorias físicas, os Termos deverão definir termos gerais de fornecimento (como entrega e frete, devoluções e garantias do produto). Exemplo:Ao comprar um item, você concorda que: (i) é responsável por ler a listagem completa do item antes de assumir o compromisso de comprá-lo: (ii) aceita um contrato juridicamente vinculativo para comprar um item quando se compromete a comprar um item e você conclui o processo de pagamento de check-out.  Os preços que cobramos pelos nossos serviços / produtos estão listados no site. Reservamo-nos o direito de alterar nossos preços de produtos exibidos a qualquer momento e corrigir erros de precificação que possam ocorrer inadvertidamente. Informações adicionais sobre preços e impostos sobre vendas estão disponíveis na página de pagamentos.  “A taxa pelos serviços e quaisquer outros encargos que você possa incorrer em conexão com o uso do serviço, como impostos e possíveis taxas de transação, serão cobrados mensalmente por sua forma de pagamento." Política de devolução e reembolso; Empresas online que vendem produtos são obrigadas a apresentar a política de devolução de produtos e a política de reembolso. Isto é importante para cumprir os regulamentos de proteção do consumidor.'

  return (
    <View style={styles.container}>
    <View style={styles.header}>
        <Image
        source={logo}  
        style={styles.logo}
      />
      </View>
      <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.text}>
        {longText}
      </Text>
<TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Confirmar</Text>
      </TouchableOpacity>
    </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    padding:1
  },
  header: {
    width: 420,
    height: 138,
    backgroundColor: '#F4CA33',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 10,
  },
  logo: {
    width: 200,
    height: 40,
    marginTop: 65,
  },
  text: {
    lineHeight: 24,
  },
  button: {
    backgroundColor: '#F8A400',
    padding: 15,
    width: 350,
    borderRadius: 10,
    marginTop:100,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default App;
module.exports = {

  ambiente: {
    faroldev: 'https://digitaldev.hdevelo.com.br/',
    farolhml: 'https://digitalhml.hdevelo.com.br/',
    farolti: 'https://digitalti.hdevelo.com.br/',
    farolprod: 'https://minhaconta2.cielo.com.br/',
    faroldev_enterprisetrn: 'https://digital-dev.enterprisetrn.hdevelo.com.br/',
    farolhml_enterprisetrn: 'https://digital-hml.enterprisetrn.hdevelo.com.br/',
    farolti_enterprisetrn: 'https://digital-ti.enterprisetrn.hdevelo.com.br/'
  },

  routes: {
    legado: {
      contratarPlano: 'farol/backoffice/subscription',
      cancelarPlano: 'farol/subscription/force?channel=BACKOFFICE&description=Plano cancelado via automação de testes.',
      minhaconta: 'minha-conta/home',
      servicos: 'minha-conta/servicos',
      farol: 'minha-conta/redirectFarol'
    },
    novoDesktop: {
      login: 'site-md-farol/login/',
      onboarding: 'site-md-farol/onboarding',
      mailconfirm: 'site-md-farol/onboarding/mail-confirm',
      similarbusiness: 'site-md-farol/onboarding/similar-business',
      categorysubcategory: 'site-md-farol/onboarding/category-subcategory',
      dashboard: 'site-md-farol/dashboard',
      minhasVendas: 'site-md-farol/meu-negocio',
      meusCleintes: 'site-md-farol/my-clients',
      meuFarol: 'site-md-farol/meu-farol',
      ajuda: 'site-md-farol/ajuda',
      upgradeplano: 'site-md-farol/meu-farol/upgrade-plano',
      ramodeatividade: 'site-md-farol/onboarding/category-subcategory'
    }
  },

  messages: {
    farol: {
      msgContratarPlano: 'Contratação realizada com sucesso.',
      msgAlterarPlano: ' Alteração realizada com sucesso.',
      msgCancelarPlano: 'Cancelamento realizado com sucesso.',
      msgcancelarAgendamento: 'Desagendamento do cancelamento realizado com sucesso.'
    }
  },

  text: {
    titleComment: 'Leave a Comment'
  },

  visualizacao: {
    diaria: 'Diária',
    semanal: 'Semanal',
    mensal: 'Mensal',
    anual: 'Anual',
    personalizada: 'Personalizada'
  },

  menulateral: {
    painelinicial: 'Painel Inicial',
    minhasvendas: 'Minhas Vendas',
    meusclientes: 'Meus Clientes',
    meufarol: 'Meu Farol',
    ajuda: 'Ajuda'
  },

  ec: {
    login: {
      estabelecimento: '1014231342',
      usuario: '1014231342',
      senha: '123456'
    },

    loginplano: {
      basico: {
        estabelecimento: '1005301830',
        usuario: '1005301830',
        senha: 's@1005301830'
      },
      completo: {
        estabelecimento: '1014231342',
        usuario: '1014231342',
        senha: '123456'
      }
    },

    logininterno: {
      usuario: 'lcastro',
      senha: 'cielo4321'
    },

    loginprod: {
      estabelecimento: '1095113817',
      usuario: 'calilneto',
      senha: 'C1elo2020'
    },

    legibilidade: {
      estabelecimento: '1005811641',
      usuario: '1005811641',
      senha: '123456'
    },

    termodeuso: {
      basico: {
        estabelecimento: '1005811641',
        usuario: '1005811641',
        senha: '123456'
      },
      completo: {
        estabelecimento: '1004633111',
        usuario: '1004633111',
        senha: 's@1004633111'
      }
    },

    meufarol: {
      basico: {
        estabelecimento: '1005301813',
        usuario: '1005301813',
        senha: 's@1005301813'
      },
      completo: {
        estabelecimento: '1005301821',
        usuario: '1005301821',
        senha: '123456'
      }
    },

    cancelarplano: {
      basico: {
        estabelecimento: '1005811641',
        usuario: '1005811641',
        senha: '123456'
      },
      completo: {
        estabelecimento: '1004633111',
        usuario: '1004633111',
        senha: 's@1004633111'
      }
    },

    upgradeplano: {
      basico: {
        estabelecimento: '1005811641',
        usuario: '1005811641',
        senha: '123456'
      },
      completo: {
        estabelecimento: '1004633111',
        usuario: '1004633111',
        senha: 's@1004633111'
      }
    },

    onboarding: {
      completo: {
        estabelecimento: '1004633111',
        usuario: '1004633111',
        senha: 's@1004633111'
      },
      parcial: {
        estabelecimento: '1014691912',
        usuario: '1014691912',
        senha: 's@1014691912'
      },
      parcialalt: {
        estabelecimento: '1005811641',
        usuario: '1005811641',
        senha: '123456'
      },
      parcialalt2: {
        estabelecimento: '1035782909',
        usuario: '1035782909',
        senha: 'cielo1234'
      },
      completoalt: {
        estabelecimento: '1005874040',
        usuario: '1005874040',
        senha: 's@1005874040'
      }
    },

    contratarplano: {
      basico: {
        estabelecimento: '1014231342',
        usuario: '1014231342',
        senha: '123456'
      },
      completo: {
        estabelecimento: '1014231342',
        usuario: '1014231342',
        senha: '123456'
      }
    },

    alteraplano: {
      basico: {
        estabelecimento: '1014231342',
        usuario: '1014231342',
        senha: '123456'
      },
      completo: {
        estabelecimento: '1014231342',
        usuario: '1014231342',
        senha: '123456'
      }
    },

    faturamento: {
      basico: {
        estabelecimento: '1014231342',
        usuario: '1014231342',
        senha: '123456'
      },
      completo: {
        estabelecimento: '1014231342',
        usuario: '1014231342',
        senha: '123456'
      }
    }
  }
}

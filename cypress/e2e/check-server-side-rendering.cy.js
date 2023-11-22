describe('server side rendered page', () => {
  it('should find meta description', () => {
    cy.visit('/guides/getting-started/');
    cy.get('head meta[name="description"]').should(
      'have.attr',
      'content',
      '学习如何使用 webpack5 打包 JavaScript 应用'
    );
  });

  it('should find html tag with lang', () => {
    cy.visit('/');
    cy.get('html[lang="zh-cmn-Hans"]');
  });

  it('should find meta charset', () => {
    cy.visit('/');
    cy.get('meta[charset="utf-8"]');
  });

  it('should find the default meta description', () => {
    cy.visit('/');
    cy.get('head meta[name="description"]').should(
      'have.attr',
      'content',
      'webpack 是一个模块打包器。它的主要目标是将 JavaScript 文件打包在一起，打包后的文件用于在浏览器中使用，但它也能够胜任转换、打包或包裹任何资源。'
    );
  });

  it('should find title', () => {
    cy.visit('/');
    cy.title().should('eq', 'webpack');

    cy.visit('/guides/getting-started/');
    cy.title().should('eq', '起步 | webpack 中文文档');
  });
});

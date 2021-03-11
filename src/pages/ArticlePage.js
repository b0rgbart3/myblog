import React from 'react';
import articleContent from './article-content';
import ArticlesList from '../components/ArticlesList';
import NotFoundPage from './NotFoundPage';

//  The name parameter is coming from the React Router
const ArticlesPage = ( { match }) => {

    const name = match.params.name;
    // find the article whos name matches the name in our URL name parameter
    // by filterting te imported article content array, looking for a match

    const article = articleContent.find(article => article.name===name);

        if (!article) {
            return <NotFoundPage />
        }
        const otherArticles = articleContent.filter(article => article.name !== name)
        return (
            <>
            <h1>{article.title}</h1>
            {article.content.map((paragraph, key) => (
                <p key={key}>{paragraph}</p>
            )) }
            <h3>Other Articles:</h3>
            <ArticlesList articles={otherArticles} />
            </>
        )

}
 

export default ArticlesPage;

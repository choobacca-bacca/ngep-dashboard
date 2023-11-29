from langchain.retrievers import AmazonKendraRetriever

request = {
   "IndexId": "d7102dbc-91b0-4079-bfd7-7cff5d4612ff",
   "QueryText": "what is NGEP"
}

retriever = AmazonKendraRetriever(index_id="d7102dbc-91b0-4079-bfd7-7cff5d4612ff")

def lambda_handler(event, context):
    # TODO implement
    return {
        print(retriever.get_relevant_documents('what is NGEP'))
    }

print(retriever.get_relevant_documents('what is NGEP'))
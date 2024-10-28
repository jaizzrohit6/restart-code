import pandas as pd

view_large = "view_name "
column_list = ["id","pass","roll"]

def process_with_openai(data_summary,column_list):

    """Send chunk to OpenAI for processing."""

    template = f"""
        Actual Dataset 
        {data_summary}

        and {column_list}
        here wikk be the template 
    """

    prompt = PromptTemplate(input_variables = {data_summary})
    chain = LLMChain(llm=llm,prompt=prompt)
    insight = chain.run({data_summary})
    return insight




def getData(view_large,column_list):

    df_large_new = {
        spark.table(view_large).select(*column_list)
        .filter((col("testid") == "abc"))
    }

    df_large_new = df_large_new.toPandas()

    return df_large_new



df_result = getData(view_large,column_list)

for index,row in df_result.iterrows():
    data_summary= pd.DataFrame([row] , columns=column_list)
    df_insight = process_with_openai(data_summary,column_list)
    df_result = df_insight


display(df_insight)
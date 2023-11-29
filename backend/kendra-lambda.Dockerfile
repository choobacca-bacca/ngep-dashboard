FROM python:3

WORKDIR /ngep-dashboard/

COPY requirements.txt ./
COPY ./kendra-lambda.py /ngep-dashboard/

RUN pip install --no-cache-dir -r requirements.txt

CMD ["python3", "kendra-lambda.py"]

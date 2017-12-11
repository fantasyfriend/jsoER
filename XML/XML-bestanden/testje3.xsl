<?xml version="1.0"?>
<xsl:stylesheet 
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output method="html"/>
    <xsl:template match="bookstore">
        <table>
            <tr><th>Titel</th><th>Auteur</th><th>ISBN</th><th>Prijs</th></tr>
            <xsl:for-each select="book">
                <xsl:sort select="price" data-type="number"/>
                <tr>
                    <td>
                        <xsl:value-of select="title" />
                    </td>
                    <td>
                        <xsl:value-of select="author" />
                    </td>
                    <td>
                        <xsl:value-of select="@ISBN" />
                    </td>
                    <td>
                        <xsl:value-of select="price" />
                    </td>
                </tr>
            </xsl:for-each>
        </table>
    </xsl:template>

        
</xsl:stylesheet>
<?php

namespace Entity;

use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiResource;

/**
 * Commande
 *
 * @ORM\Table(name="commande", indexes={@ORM\Index(name="panier_id", columns={"panier_id"})})
 * @ORM\Entity
 * @apiResource()
 */
class Commande
{
    /**
     * @var int
     *
     * @ORM\Column(name="commande_id", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $commandeId;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="_date", type="datetime", nullable=false)
     */
    private $date;

    /**
     * @var float|null
     *
     * @ORM\Column(name="prix", type="float", precision=10, scale=0, nullable=true)
     */
    private $prix;

    /**
     * @var int
     *
     * @ORM\Column(name="panier_id", type="integer", nullable=false)
     */
    private $panierId;
}

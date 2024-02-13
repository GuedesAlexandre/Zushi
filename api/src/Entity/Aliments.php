<?php

namespace Entity;

use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiResource;

/**
 * Aliments
 *
 * @ORM\Table(name="aliments")
 * @ORM\Entity
 * @apiResource()
 */
class Aliments
{
    /**
     * @var string
     *
     * @ORM\Column(name="aliment_id", type="string", length=50, nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $alimentId;

    /**
     * @var string
     *
     * @ORM\Column(name="nom", type="string", length=50, nullable=false)
     */
    private $nom;

    /**
     * @var string
     *
     * @ORM\Column(name="quantite", type="string", length=50, nullable=false)
     */
    private $quantite;
}
